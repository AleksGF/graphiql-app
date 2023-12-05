import type { RouteObject } from 'react-router';
import App from '@/App';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import MainPage from '@/pages/MainPage/MainPage';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
    ],
    // TODO add ErrorPage or wrap app in ErrorBoundary
    errorElement: <div>Error</div>,
  },
  {
    path: '*',
    // TODO add 404 page
    element: <div>404 - Not Found</div>,
  },
];
