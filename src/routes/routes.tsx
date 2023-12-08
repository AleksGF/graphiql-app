import type { RouteObject } from 'react-router';
import Layout from '@/components/Layout/Layout';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import MainPage from '@/pages/MainPage/MainPage';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import Custom404Page from '@/pages/404';
import WithAuthorizedAccess from '@/HOC/WithAuthorizedAccess';
import WithAnonymousAccess from '@/HOC/WithAnonymousAccess';

export enum RoutePaths {
  IndexPage = '/',
  MainPage = '/main',
  SignInPage = '/signin',
  SignUpPage = '/signup',
}

export const routes: RouteObject[] = [
  {
    path: RoutePaths.IndexPage,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: RoutePaths.MainPage,
        element: (
          <WithAuthorizedAccess>
            <MainPage />
          </WithAuthorizedAccess>
        ),
      },
      {
        path: RoutePaths.SignInPage,
        element: (
          <WithAnonymousAccess>
            <SignInPage />
          </WithAnonymousAccess>
        ),
      },
      {
        path: RoutePaths.SignUpPage,
        element: (
          <WithAnonymousAccess>
            <SignUpPage />
          </WithAnonymousAccess>
        ),
      },
    ],
    // TODO add ErrorPage
    errorElement: <div>Error</div>,
  },
  {
    path: '*',
    element: <Custom404Page />,
  },
];
