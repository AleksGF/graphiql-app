import { prepareRequest } from '@/utils/prepareRequest';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { HTTP_STATUS, docsApiQuery } from '@/constants/api';

interface ApiDocsType {
  name: string | null;
  kind: string;
  ofType: {
    name: string;
  } | null;
}

interface ApiDocsArg {
  name: string | null;
  type: ApiDocsType;
}

export interface ApiDocsTypeField {
  name: string;
  description: string | null;
  type: ApiDocsType;
  args: ApiDocsArg[];
}

interface ApiDocsTypeEntry {
  name: string;
  description: string | null;
  fields: ApiDocsTypeField[];
}

export interface ApiDocs {
  types: ApiDocsTypeEntry[];
}

interface ApiDocsState {
  isApiDocsFetching: boolean;
  apiDocs: ApiDocs | null;
  apiDocsError: string | null;
}

const initialState: ApiDocsState = {
  isApiDocsFetching: false,
  apiDocs: null,
  apiDocsError: null,
};

// TODO: Handle errors
// TODO: Fetch on sucessfull endpoint change

export const fetchApiDocs = createAsyncThunk(
  'apiDocs/fetchApiDocs',
  async (endpointUrl: string, { getState }) => {
    const headers = (getState() as RootState).headersEditor.content;

    const axios = prepareRequest(headers);

    const response = await axios(endpointUrl, {
      data: { query: docsApiQuery },
    });

    console.log('DOCS: ', response.data.data.__schema, typeof response.data);

    return response.data.data.__schema;
  },
);

const apiDocsSlice = createSlice({
  name: 'apiDocs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchApiDocs.pending, (state) => {
      state.isApiDocsFetching = true;
      state.apiDocsError = null;
    });
    builder.addCase(
      fetchApiDocs.fulfilled,
      (state, action: PayloadAction<ApiDocs>) => {
        state.apiDocs = action.payload;
        state.isApiDocsFetching = false;
      },
    );
    builder.addCase(fetchApiDocs.rejected, (state) => {
      state.isApiDocsFetching = false;
      state.apiDocsError = 'error';
    });
  },
});

// export const { clearAddingEndpointError } = apiDocsSlice.actions;

export default apiDocsSlice.reducer;
