import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import appViewReducer from './reducers/appViewSlice';
import EndpointEditorReducer from './reducers/endpointEditorSlice';
import queryEditorReducer from './reducers/queryEditorSlice';
import responseViewerReducer from './reducers/responseViewSlice';
import apiEndpointReducer from './reducers/apiEndpointSlice';
import headersEditorReducer from './reducers/headersEditorSlice';
import variablesEditorReducer from './reducers/headersEditorSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    appView: appViewReducer,
    endpointEditor: EndpointEditorReducer,
    queryEditor: queryEditorReducer,
    responseViewer: responseViewerReducer,
    apiEndpoint: apiEndpointReducer,
    headersEditor: headersEditorReducer,
    variablesEditor: variablesEditorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
