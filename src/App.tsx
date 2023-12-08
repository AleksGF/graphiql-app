import { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { setUser } from './store/reducers/userSlice';
import { useAuthState } from './hooks/auth';
import { useAppDispatch } from './hooks/hooks';
import '@/services/firebaseInit';

export default function App() {
  const dispatch = useAppDispatch();
  const [user] = useAuthState();

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return <Layout />;
}
