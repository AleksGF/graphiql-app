import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EndpointEditorState {
  isEndpointEditMode: boolean;
  newEndpointCurrentInput: string;
}

const initialState: EndpointEditorState = {
  isEndpointEditMode: false,
  newEndpointCurrentInput: '',
};

const EndpointEditorSlice = createSlice({
  name: 'appView',
  initialState,
  reducers: {
    setNewEndpointCurrentInput: (state, action: PayloadAction<string>) => {
      state.newEndpointCurrentInput = action.payload;
    },
    setEndpointEditMode: (state, action: PayloadAction<boolean>) => {
      state.isEndpointEditMode = action.payload;
    },
  },
});

export const { setNewEndpointCurrentInput, setEndpointEditMode } =
  EndpointEditorSlice.actions;

export default EndpointEditorSlice.reducer;
