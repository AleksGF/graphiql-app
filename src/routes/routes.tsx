import type { RouteObject } from 'react-router';
import App from '@/App';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import MainPage from '@/pages/MainPage/MainPage';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';

export enum RoutePaths {
  IndexPage = '/',
  MainPage = '/main',
  SignInPage = '/signin',
  SignUpPage = '/signup',
}

export const routes: RouteObject[] = [
  {
    path: RoutePaths.IndexPage,
    element: <App />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: RoutePaths.MainPage,
        element: <MainPage />,
      },
      {
        path: RoutePaths.SignInPage,
        element: <SignInPage />,
      },
      {
        path: RoutePaths.SignUpPage,
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
