import type { RouteObject } from 'react-router';
import App from '@/App';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: 'login/',
        element: <div>Login</div>,
      },
      {
        path: 'register/',
        element: <div>Register</div>,
      },
    ],
    errorElement: <div>Error</div>,
  },
  {
    path: '*',
    element: <div>404 - Not Found</div>,
  },
];
