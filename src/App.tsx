import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageContextProvider } from '@/components/context';
import { ColorModeContextProvider } from '@/components/context';
import { setUser } from './store/reducers/userSlice';
import { useAppDispatch } from './hooks/hooks';
import { useAuthState } from './hooks/auth';
import { routes } from '@/routes/routes';
import '@/services/firebaseInit';

const router = createBrowserRouter(routes);

export default function App() {
  const dispatch = useAppDispatch();
  const [user] = useAuthState();

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <LanguageContextProvider>
      <ColorModeContextProvider>
        <RouterProvider router={router} />
      </ColorModeContextProvider>
    </LanguageContextProvider>
  );
}
