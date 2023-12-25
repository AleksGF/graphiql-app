import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApiEndpoint {
  apiUrl: string;
  acceptedHeaders: '*' | string[] | null;
  apiSchema: string;
}

const initialState: ApiEndpoint = {
  apiUrl: '',
  acceptedHeaders: null,
  apiSchema: '',
};

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
