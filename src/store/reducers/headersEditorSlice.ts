import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeadersEditorContent = Record<string, string> | null;

interface HeadersEditorState {
  content: HeadersEditorContent;
}

const initialState: HeadersEditorState = {
  content: null,
};

const headersEditorSlice = createSlice({
  name: 'headersEditor',
  initialState,
  reducers: {
    setHeadersEditorContent: (
      state,
      action: PayloadAction<HeadersEditorContent>,
    ) => {
      state.content = action.payload;
    },
  },
});

export const { setHeadersEditorContent } = headersEditorSlice.actions;

export default headersEditorSlice.reducer;
