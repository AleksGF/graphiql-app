import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppViewState {
  isDocDrawerOpen: boolean;
  isEditorAccordionOpen: boolean;
  activeEditorTab: number;
}

const initialState: AppViewState = {
  isDocDrawerOpen: false,
  isEditorAccordionOpen: false,
  activeEditorTab: 0,
};

const appViewSlice = createSlice({
  name: 'appView',
  initialState,
  reducers: {
    toggleIsDocDrawerOpen: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isDocDrawerOpen: action.payload,
    }),
    toggleEditorAccordionOpen: (state) => ({
      ...state,
      isEditorAccordionOpen: !state.isEditorAccordionOpen,
    }),
    setActiveEditorTab: (state, action: PayloadAction<number>) => ({
      ...state,
      activeEditorTab: action.payload,
    }),
  },
});

export const {
  toggleIsDocDrawerOpen,
  toggleEditorAccordionOpen,
  setActiveEditorTab,
} = appViewSlice.actions;

export default appViewSlice.reducer;
