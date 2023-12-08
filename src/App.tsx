import { useEffect } from 'react';
import React, { useMemo, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { setUser } from './store/reducers/userSlice';
import { useAuthState } from './hooks/auth';
import { useAppDispatch } from './hooks/hooks';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import LanguageContextProvider from '@/components/context/LanguageContext/LanguageContextProvider';
import { routes } from '@/routes/routes';
import '@/services/firebaseInit';

const router = createBrowserRouter(routes);

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function App() {
  const dispatch = useAppDispatch();
  const [user] = useAuthState();

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light',
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <LanguageContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </LanguageContextProvider>
  );
}
