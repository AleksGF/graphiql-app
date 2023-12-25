import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Content = Record<string, string> | null;

interface HeadersEditorState {
  content: Content;
}

const initialState: HeadersEditorState = {
  content: null,
};

const headersEditorSlice = createSlice({
  name: 'headersEditor',
  initialState,
  reducers: {
    setHeadersEditorContent: (state, action: PayloadAction<Content>) => {
      state.content = action.payload;
    },
  },
});

export const { setHeadersEditorContent } = headersEditorSlice.actions;

export default headersEditorSlice.reducer;
