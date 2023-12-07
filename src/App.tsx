import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LanguageContextProvider from '@/components/context/LanguageContext/LanguageContextProvider';
import ColorModeContextProvider from '@/components/context/ColorModeContext/ColorModeContextProvider';
import { routes } from '@/routes/routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <LanguageContextProvider>
      <ColorModeContextProvider>
        <RouterProvider router={router} />
      </ColorModeContextProvider>
    </LanguageContextProvider>
  );
}
