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
  user: { user: { email: 'test@test.com', id: 'some_id' }, isLoading: false },
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
