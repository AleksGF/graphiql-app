import UserForm from '@/components/forms/userForm/UserForm';
import { RoutePaths } from '@/routes/routes';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '@/store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useEffect } from 'react';

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate(RoutePaths.MainPage);
    }
  }, [navigate, user]);

  const handleLogin = async (email: string, pass: string) => {
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, pass);

      if (user.email) {
        dispatch(setUser({ email: user.email, id: user.uid }));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <h2>Registration</h2>
      <UserForm onSubmit={handleLogin} />
    </main>
  );
}
