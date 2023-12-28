import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type VariablesEditorContent = Record<string, string> | null;

interface VariablesEditorState {
  content: VariablesEditorContent;
}

const initialState: VariablesEditorState = {
  content: null,
};

const variablesEditorSlice = createSlice({
  name: 'variablesEditor',
  initialState,
  reducers: {
    setVariablesEditorContent: (
      state,
      action: PayloadAction<VariablesEditorContent>,
    ) => {
      state.content = action.payload;
    },
  },
});

export const { setVariablesEditorContent } = variablesEditorSlice.actions;

export default variablesEditorSlice.reducer;
