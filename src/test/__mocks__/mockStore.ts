import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export const initialState: PreloadedState<RootState> = {
  user: { user: null, isLoading: true },
  appView: {
    isDocDrawerOpen: false,
    isEditorAccordionOpen: false,
    activeEditorTab: 0,
  },
  endpointEditor: {
    currentEndpoint:
      'https://swapi-graphql.netlify.app/.netlify/functions/index',
    isEndpointEditMode: false,
    newEndpointCurrentInput: '',
  },
};

export const stateWithUser: PreloadedState<RootState> = {
  user: { user: { email: 'test@test.com', id: 'some_id' }, isLoading: false },
  appView: {
    isDocDrawerOpen: false,
    isEditorAccordionOpen: false,
    activeEditorTab: 0,
  },
  endpointEditor: {
    currentEndpoint:
      'https://swapi-graphql.netlify.app/.netlify/functions/index',
    isEndpointEditMode: false,
    newEndpointCurrentInput: '',
  },
};
