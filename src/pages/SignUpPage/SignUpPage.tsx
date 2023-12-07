import { useNavigate } from 'react-router-dom';
import UserForm from '@/components/forms/userForm/UserForm';
import { useAppDispatch } from '@/hooks/hooks';
import { setUser } from '@/store/reducers/userSlice';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { RoutePaths } from '@/routes/routes';

export default function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (email: string, pass: string) => {
    const auth = getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, pass);

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
      <h2>Registration</h2>
      <UserForm onSubmit={handleSubmit} />
    </main>
  );
}
