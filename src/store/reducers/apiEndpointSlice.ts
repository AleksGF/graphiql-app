import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { prepareRequest } from '@/utils/prepareRequest';
import { RootState } from '@/store/store';

interface ApiEndpoint {
  isApiFetching: boolean;
  apiUrl: string;
  apiAddingError: string | null;
}

const initialState: ApiEndpoint = {
  isApiFetching: false,
  apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  apiAddingError: null,
};

// TODO Add Axios
// TODO Handle Errors
export const addNewEndpoint = createAsyncThunk(
  'apiEndpoint/addNewEndpoint',
  async (endpointUrl: string, { getState, rejectWithValue }) => {
    const headers = (getState() as RootState).headersEditor.content;

    const req = prepareRequest(endpointUrl, headers);

    try {
      const res = await fetch(req);

      if (!res.ok) {
        rejectWithValue(`Status: ${res.status}, StatusText: ${res.statusText}`);
      }
    } catch (error) {
      rejectWithValue(String(error));
    }

    return endpointUrl;
  },
);

const apiEndpointSlice = createSlice({
  name: 'apiEndpoint',
  initialState,
  reducers: {
    clearAddingEndpointError: (state) => {
      state.apiAddingError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewEndpoint.pending, (state) => {
      state.isApiFetching = true;
      state.apiAddingError = null;
    });
    builder.addCase(
      addNewEndpoint.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.apiUrl = action.payload;
        state.isApiFetching = false;
      },
    );
    builder.addCase(
      addNewEndpoint.rejected,
      (
        state,
        action: PayloadAction<
          unknown,
          string,
          | ({
              arg: string;
              requestId: string;
              requestStatus: 'rejected';
              aborted: boolean;
              condition: boolean;
            } & { rejectedWithValue: true })
          | ({
              arg: string;
              requestId: string;
              requestStatus: 'rejected';
              aborted: boolean;
              condition: boolean;
            } & { rejectedWithValue: false }),
          SerializedError
        >,
      ) => {
        state.apiAddingError =
          typeof action.payload === 'string'
            ? action.payload
            : action.error.message ?? '';
        state.isApiFetching = false;
      },
    );
  },
});

export const { clearAddingEndpointError } = apiEndpointSlice.actions;

export default apiEndpointSlice.reducer;
