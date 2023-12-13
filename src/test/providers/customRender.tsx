import { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppStore, RootState } from '@/store/store';
import userReducer from '@/store/reducers/userSlice';
import appViewReducer from '@/store/reducers/appViewSlice';
import { LanguageContext } from '@/context/LanguageContext/LanguageContext';
import { ColorModeContext } from '@/context/ColorModeContext/ColorModeContext';
import { Langs } from '@/constants/dictionaries';
import { RoutePaths } from '@/routes/routes';
import { initialState } from '@/test/__mocks__/mockStore';

interface CustomRenderProps extends RenderOptions {
  language?: Langs;
  setLanguage?: (newLanguage: Langs) => void;
  colorMode?: 'light' | 'dark';
  toggleColorMode?: VoidFunction;
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  route?: string;
}

interface RenderResultWithStore extends RenderResult {
  store: AppStore;
}

export const customRender = (
  ui: ReactElement,
  {
    language = Langs.EN,
    setLanguage = () => {},
    colorMode = 'light',
    toggleColorMode = () => {},
    preloadedState = initialState,
    store = configureStore({
      reducer: {
        user: userReducer,
        appView: appViewReducer,
      },
      preloadedState,
    }) as AppStore,
    route = RoutePaths.IndexPage,
    ...renderOptions
  }: CustomRenderProps,
): RenderResultWithStore => {
  window.history.pushState({}, 'Test page', route);

  const wrapper = ({ children }: PropsWithChildren): ReactElement => (
    <Provider store={store}>
      <BrowserRouter>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <ColorModeContext.Provider value={{ toggleColorMode }}>
            <ThemeProvider
              theme={createTheme({
                palette: {
                  mode: colorMode,
                },
              })}
            >
              {children}
            </ThemeProvider>
          </ColorModeContext.Provider>
        </LanguageContext.Provider>
      </BrowserRouter>
    </Provider>
  );

  return {
    store,
    ...(render(ui, { wrapper, ...renderOptions }) as RenderResult),
  };
};
