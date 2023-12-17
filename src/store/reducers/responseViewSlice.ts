import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ResponseViewerState {
  content: string;
}

const initialState: ResponseViewerState = {
  content: '',
};

const responseViewerSlice = createSlice({
  name: 'responseViewer',
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
  },
});

export const { setContent } = responseViewerSlice.actions;

export default responseViewerSlice.reducer;
