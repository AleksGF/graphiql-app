import { prettifyGraphQl } from '@/utils/prettifyGraphQl';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QueryEditorState {
  content: string;
}

const initialState: QueryEditorState = {
  content: '',
};

const queryEditorSlice = createSlice({
  name: 'queryEditor',
  initialState,
  reducers: {
    setContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
    prettifyContent(state) {
      state.content = prettifyGraphQl(state.content);
    },
  },
});

export const { setContent, prettifyContent } = queryEditorSlice.actions;

export default queryEditorSlice.reducer;
