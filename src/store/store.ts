import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import appViewReducer from './reducers/appViewSlice';
import EndpointEditorReducer from './reducers/endpointEditorSlice';
import responseViewerReducer from './reducers/responseViewSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    appView: appViewReducer,
    endpointEditor: EndpointEditorReducer,
    responseViewer: responseViewerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
