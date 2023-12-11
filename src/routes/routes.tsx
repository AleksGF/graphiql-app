import type { RouteObject } from 'react-router';
import Layout from '@/components/Layout/Layout';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import MainPage from '@/pages/MainPage/MainPage';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import Custom404Page from '@/pages/404';
import CustomErrorPage from '@/pages/error';

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
    errorElement: <CustomErrorPage />,
  },
  {
    path: '*',
    element: <Custom404Page />,
  },
];
