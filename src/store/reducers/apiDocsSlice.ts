import { prepareRequest } from '@/utils/prepareRequest';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { typesApiQuery } from '@/constants/api';
import { Keys } from '@/constants/dictionaries';

interface ApiDocsTypeListEntry {
  name: string;
}

interface ApiDocsEnumValuesEntry {
  name: string;
}

interface ApiDocsTypesList {
  types: ApiDocsTypeListEntry[];
}

export enum TypeKind {
  SCALAR = 'SCALAR',
  OBJECT = 'OBJECT',
  INTERFACE = 'INTERFACE',
  UNION = 'UNION',
  ENUM = 'ENUM',
  INPUT_OBJECT = 'INPUT_OBJECT',
  LIST = 'LIST',
  NON_NULL = 'NON_NULL',
}

export interface ApiDocsFieldEntry {
  name: string;
  description: string | null;
  type: {
    name: string | null;
    kind: TypeKind;
    ofType: {
      name: string | null;
      kind: TypeKind;
    } | null;
  };
  args: {
    name: string;
    type: {
      name: string | null;
      kind: TypeKind;
    };
  }[];
}

export interface ApiDocsInputFieldEntry {
  name: string;
  description: string | null;
  type: {
    name: string;
    kind: TypeKind;
    ofType: {
      name: string;
      kind: TypeKind;
    } | null;
  }[];
}

interface ApiDocsTypeInfo {
  name: string;
  description: string | null;
  fields: ApiDocsFieldEntry[];
  inputFields: ApiDocsInputFieldEntry[];
  enumValues: ApiDocsEnumValuesEntry[] | null;
}

interface ApiDocsState {
  isApiDocsFetching: boolean;
  apiTypesList: ApiDocsTypesList | null;
  apiDocsError: string | null;
  apiDocsTypeDetailedInfo: ApiDocsTypeInfo | null;
}

const initialState: ApiDocsState = {
  isApiDocsFetching: false,
  apiTypesList: null,
  apiDocsError: null,
  apiDocsTypeDetailedInfo: null,
};

export const fetchApiTypesList = createAsyncThunk(
  'apiDocs/fetchApiTypesList',
  async (endpointUrl: string, { getState }) => {
    const headers = (getState() as RootState).headersEditor.content;

    const axios = prepareRequest(headers);

    const response = await axios(endpointUrl, {
      data: { query: typesApiQuery },
    });

    return response.data.data.__schema;
  },
);

export const fetchApiTypeDetailedInfo = createAsyncThunk(
  'apiDocs/fetchApiTypeDetailedInfo',
  async (args: { endpointUrl: string; type: string }, { getState }) => {
    const { endpointUrl, type } = args;

    const headers = (getState() as RootState).headersEditor.content;

    const axios = prepareRequest(headers);

    const response = await axios(endpointUrl, {
      data: {
        query: `
      {
        __type(name: "${type}") {
          name
          description
          inputFields {
            description
            name
            type {
              name
              kind
              ofType {
                name
                kind
              }
            }
          }
          fields {
            description
            name
            type {
              name
              kind
              ofType {
                name
                kind
              }
            }
            args {
              name
              type {
                name
                kind
              }
            }
          }
          enumValues {
            name
          }
        }
      }`,
      },
    });

    return response.data.data.__type;
  },
);

const apiDocsSlice = createSlice({
  name: 'apiDocs',
  initialState,
  reducers: {
    clearApiDocsTypeDetailedInfo: (state) => {
      state.apiDocsTypeDetailedInfo = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchApiTypesList.pending, (state) => {
      state.isApiDocsFetching = true;
      state.apiDocsError = null;
    });
    builder.addCase(
      fetchApiTypesList.fulfilled,
      (state, action: PayloadAction<ApiDocsTypesList>) => {
        state.apiTypesList = action.payload;
        state.isApiDocsFetching = false;
      },
    );
    builder.addCase(fetchApiTypesList.rejected, (state, action) => {
      state.apiDocsError =
        typeof action.payload === 'string'
          ? action.payload
          : action.error.message ?? Keys.REQUEST_ERROR_UNKNOWN;
      state.isApiDocsFetching = false;
    });
    builder.addCase(fetchApiTypeDetailedInfo.pending, (state) => {
      state.isApiDocsFetching = true;
      state.apiDocsError = null;
    });
    builder.addCase(
      fetchApiTypeDetailedInfo.fulfilled,
      (state, action: PayloadAction<ApiDocsTypeInfo>) => {
        state.apiDocsTypeDetailedInfo = action.payload;
        state.isApiDocsFetching = false;
      },
    );
    builder.addCase(fetchApiTypeDetailedInfo.rejected, (state, action) => {
      state.apiDocsError =
        typeof action.payload === 'string'
          ? action.payload
          : action.error.message ?? Keys.REQUEST_ERROR_UNKNOWN;
      state.isApiDocsFetching = false;
    });
  },
});

export const { clearApiDocsTypeDetailedInfo } = apiDocsSlice.actions;

export default apiDocsSlice.reducer;
