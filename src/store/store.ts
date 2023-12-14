import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import appViewReducer from './reducers/appViewSlice';
import EndpointEditorReducer from './reducers/endpointEditorSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    appView: appViewReducer,
    endpointEditor: EndpointEditorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
