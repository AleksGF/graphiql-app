import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EndpointEditorState {
  currentEndpoint: string;
  isEndpointEditMode: boolean;
  newEndpointCurrentInput: string;
}

const initialState: EndpointEditorState = {
  currentEndpoint: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  isEndpointEditMode: false,
  newEndpointCurrentInput: '',
};

const EndpointEditorSlice = createSlice({
  name: 'appView',
  initialState,
  reducers: {
    setNewEndpointCurrentInput: (state, action: PayloadAction<string>) => ({
      ...state,
      newEndpointCurrentInput: action.payload,
    }),
    toggleEndpointEditMode: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isEndpointEditMode: action.payload,
    }),
    setNewEndpoint: (state) => ({
      ...state,
      currentEndpoint: state.newEndpointCurrentInput,
      newEndpointCurrentInput: '',
      isEndpointEditMode: false,
    }),
  },
});

export const {
  setNewEndpointCurrentInput,
  toggleEndpointEditMode,
  setNewEndpoint,
} = EndpointEditorSlice.actions;

export default EndpointEditorSlice.reducer;
