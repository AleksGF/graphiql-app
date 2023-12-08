import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const signIn = async (email: string, pass: string) => {
  const auth = getAuth();

  await signInWithEmailAndPassword(auth, email, pass);
};

export const signUp = async (email: string, pass: string) => {
  const auth = getAuth();

  await createUserWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
  const auth = getAuth();

  await signOut(auth);
};
