import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { prepareRequest } from '@/utils/prepareRequest';
import { defaultApiQuery } from '@/constants/api';
import { RootState } from '@/store/store';
import { AxiosError } from 'axios';

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

// TODO Handle Errors
export const addNewEndpoint = createAsyncThunk(
  'apiEndpoint/addNewEndpoint',
  async (endpointUrl: string, { getState, rejectWithValue }) => {
    const headers = (getState() as RootState).headersEditor.content;

    const axios = prepareRequest(headers);

    try {
      await axios(endpointUrl, {
        data: { query: defaultApiQuery },
      });
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status === 401
      ) {
        console.log('401 Unauthorized');

        return endpointUrl;
      }

      if (error instanceof AxiosError && error.response) {
        console.log('Response Error');

        return rejectWithValue(error.response.status);
      }

      if (error instanceof AxiosError && error.request) {
        console.log(error.request);

        return rejectWithValue('Request Error');
      }

      return rejectWithValue(
        `Error: ${error instanceof Error ? error.message : ''}`,
      );
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
