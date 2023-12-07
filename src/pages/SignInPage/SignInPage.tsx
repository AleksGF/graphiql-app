import { useNavigate } from 'react-router';
import { setUser } from '@/store/reducers/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import UserForm from '@/components/forms/userForm/UserForm';
import { useAppDispatch } from '@/hooks/hooks';
import { RoutePaths } from '@/routes/routes';

export default function SignInPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (email: string, pass: string) => {
    const auth = getAuth();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, pass);

      if (user.email) {
        dispatch(setUser({ email: user.email, id: user.uid }));
        navigate(RoutePaths.MainPage);
      }
    } catch (e) {
      console.log(e); // Implement user friendly message
    }
  };

  return (
    <main>
      <h2>Login</h2>
      <UserForm onSubmit={handleSubmit} />
    </main>
  );
}
