import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  defaultApiHeaders,
  defaultApiMethod,
  defaultApiQuery,
  defaultApiUrl,
} from '@/constants/api';
import { prepareRequest } from '@/utils/prepareRequest';
import { RootState } from '@/store/store';

interface ApiEndpoint {
  apiUrl: string;
  apiSchema: string;
}

const initialState: ApiEndpoint = {
  apiUrl: '',
  apiSchema: '',
};

export const addNewEndpoint = createAsyncThunk(
  'apiEndpoint/addNewEndpoint',
  async (endpointUrl: string, { getState }) => {
    const headers = (getState() as RootState).headersEditor.content;
    console.log(headers);

    const req = prepareRequest(endpointUrl);

    try {
      const res = await fetch(defaultApiUrl, {
        method: defaultApiMethod,
        headers: defaultApiHeaders,
        mode: 'cors',
        body: JSON.stringify({
          query: defaultApiQuery,
          variables: {},
        }),
      });

      for (const [key, value] of res.headers.entries()) {
        console.log(`${key}: ${value}`);
      }
    } catch (error) {
      console.dir(error);
    }
  },
);

const apiEndpointSlice = createSlice({
  name: 'apiEndpoint',
  initialState,
  reducers: {
    setApiEndpoint: (state, action: PayloadAction<ApiEndpoint>) => ({
      ...action.payload,
    }),
  },
});

export const { setApiEndpoint } = apiEndpointSlice.actions;

export default apiEndpointSlice.reducer;
