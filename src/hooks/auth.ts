import { useEffect, useState } from 'react';
import { getAuth, User as FBUser } from 'firebase/auth';
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
  const [user, setUser] = useState<User | null>(getUser(getAuth().currentUser));

  useEffect(() => {
    getAuth().onAuthStateChanged((fbUser) => setUser(getUser(fbUser)));
  }, []);

  return [user];
};
