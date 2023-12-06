import React from 'react';
import LanguageContextProvider from '@/components/context/LanguageContext/LanguageContextProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/routes/routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <LanguageContextProvider>
      <RouterProvider router={router} />
    </LanguageContextProvider>
  );
}
