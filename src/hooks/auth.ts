import { useEffect } from 'react';
import { getAuth, User as FBUser } from 'firebase/auth';
import { setUser, setIsLoading } from '@/store/reducers/userSlice';
import { useAppDispatch } from './hooks';
import { User } from '@/types/user';

const getUser = (fbUser: FBUser | null): User | null => {
  if (fbUser && fbUser.email) {
    const email = fbUser.email;
    const id = fbUser.uid;

    return { email, id };
  }

  return null;
};

export const useAuthState = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();

    dispatch(setUser(getUser(auth.currentUser)));
    dispatch(setIsLoading(false));

    auth.onAuthStateChanged((fbUser) => dispatch(setUser(getUser(fbUser))));
  }, [dispatch]);
};
