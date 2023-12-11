import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/hooks';
import { RoutePaths } from '@/routes/routes';

export default function WithAnonymousAccess({ children }: PropsWithChildren) {
  const { user } = useAppSelector((state) => state.user);

  const isAuthorized = !!user;

  if (isAuthorized) return <Navigate to={RoutePaths.MainPage} />;

  return <>{children}</>;
}
