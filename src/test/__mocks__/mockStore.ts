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
    isEndpointEditMode: false,
    newEndpointCurrentInput: '',
  },
  queryEditor: { content: '' },
  responseViewer: { content: '', isFetching: false, fetchError: null },
  apiEndpoint: {
    isApiFetching: false,
    apiUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    apiAddingError: null,
  },
  headersEditor: {
    content: null,
  },
  variablesEditor: {
    content: null,
  },
  apiDocs: {
    isApiDocsFetching: false,
    apiTypesList: null,
    apiDocsError: null,
    apiDocsTypeDetailedInfo: null,
  },
};

export const stateWithUser: PreloadedState<RootState> = {
  ...initialState,
  user: { user: { email: 'test@test.com', id: 'some_id' }, isLoading: false },
};

export const stateWithOpenAccordion: PreloadedState<RootState> = {
  ...initialState,
  appView: {
    ...initialState.appView,
    isEditorAccordionOpen: true,
  },
};

export const stateWithOpenSecondTab: PreloadedState<RootState> = {
  ...initialState,
  appView: {
    ...initialState.appView,
    isEditorAccordionOpen: true,
    activeEditorTab: 1,
  },
};

export const stateWithEditEndpoint: PreloadedState<RootState> = {
  ...initialState,
  endpointEditor: {
    ...initialState.endpointEditor,
    isEndpointEditMode: true,
    newEndpointCurrentInput:
      'https://swapi-graphql.netlify.app/.netlify/functions/index',
  },
};

export const stateWithEndpointError: PreloadedState<RootState> = {
  ...initialState,
  apiEndpoint: {
    ...initialState.apiEndpoint,
    apiAddingError: 'Error',
  },
  apiDocs: {
    isApiDocsFetching: false,
    apiTypesList: null,
    apiDocsError: null,
    apiDocsTypeDetailedInfo: null,
  },
};
