import { useNavigate } from 'react-router';
import { setUser } from '@/store/reducers/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import UserForm from '@/components/forms/userForm/UserForm';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RoutePaths } from '@/routes/routes';
import { useEffect } from 'react';

export default function SignInPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate(RoutePaths.MainPage);
    }
  }, [navigate, user]);

  const handleSubmit = async (email: string, pass: string) => {
    const auth = getAuth();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, pass);

      if (user.email) {
        dispatch(setUser({ email: user.email, id: user.uid }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <h2>Login</h2>
      <UserForm onSubmit={handleSubmit} />
    </main>
  );
}
