import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { prepareRequest } from '@/utils/prepareRequest';
import { Keys } from '@/constants/dictionaries';
import { getErrorTextKey } from '@/utils/getErrorTextKey';
import { AxiosError } from 'axios';

export interface ResponseViewerState {
  content: string;
  isFetching: boolean;
  fetchError: string | null;
}

const initialState: ResponseViewerState = {
  content: '',
  isFetching: false,
  fetchError: null,
};

export const fetchApi = createAsyncThunk(
  'responseViewer/fetchApi',
  async (_, { getState, rejectWithValue }) => {
    const {
      queryEditor: { content: query },
      headersEditor: { content: headers },
      variablesEditor: { content: variables },
      apiEndpoint: { apiUrl },
    } = getState() as RootState;

    if (!apiUrl) return rejectWithValue(Keys.REQUEST_ERROR_NO_ENDPOINT);

    if (!query) return rejectWithValue(Keys.REQUEST_ERROR_NO_QUERY);

    const axios = prepareRequest(headers);

    try {
      const resp = await axios(apiUrl, {
        data: { query, variables },
      });

      return JSON.stringify(resp.data.data, null, 2);
    } catch (error) {
      if (
        error instanceof AxiosError &&
        error.response?.data?.errors &&
        Array.isArray(error.response.data.errors) &&
        error.response.data.errors[0] &&
        typeof error.response.data.errors[0] === 'object' &&
        'message' in error.response.data.errors[0] &&
        error.response.data.errors[0].message.length
      ) {
        return error.response.data.errors[0].message;
      }

      return rejectWithValue(getErrorTextKey(error));
    }
  },
);

const responseViewerSlice = createSlice({
  name: 'responseViewer',
  initialState,
  reducers: {
    clearFetchError: (state) => {
      state.fetchError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.fetchError = null;
      state.isFetching = true;
    });
    builder.addCase(
      fetchApi.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.isFetching = false;
        state.content = action.payload;
      },
    );
    builder.addCase(
      fetchApi.rejected,
      (
        state,
        action: PayloadAction<
          unknown,
          string,
          {
            arg: void;
            requestId: string;
            requestStatus: 'rejected';
            aborted: boolean;
            condition: boolean;
          } & (
            | { rejectedWithValue: true }
            | ({ rejectedWithValue: false } & NonNullable<unknown>)
          ),
          SerializedError
        >,
      ) => {
        state.isFetching = false;
        state.fetchError =
          typeof action.payload === 'string'
            ? action.payload
            : action.error.message ?? Keys.REQUEST_ERROR_UNKNOWN;
      },
    );
  },
});

export const { clearFetchError } = responseViewerSlice.actions;

export default responseViewerSlice.reducer;
