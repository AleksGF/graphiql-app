import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LanguageContextProvider } from '@/context';
import { ColorModeContextProvider } from '@/context';
import { useAuthState } from './hooks/auth';
import { routes } from '@/routes/routes';
import '@/services/firebaseInit';

const router = createBrowserRouter(routes);

export default function App() {
  useAuthState();

  return (
    <LanguageContextProvider>
      <ColorModeContextProvider>
        <RouterProvider router={router} />
      </ColorModeContextProvider>
    </LanguageContextProvider>
  );
}
