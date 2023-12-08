import { useNavigate } from 'react-router';
import UserForm from '@/components/forms/userForm/UserForm';
import { RoutePaths } from '@/routes/routes';
import { signIn } from '@/services/authService';

export default function SignInPage() {
  const navigate = useNavigate();

  const handleSubmit = async (email: string, pass: string) => {
    try {
      await signIn(email, pass);
      navigate(RoutePaths.MainPage);
    } catch (e) {
      console.log(e); // TODO Implement user friendly message
    }
  };

  return (
    <main>
      <h2>Login</h2>
      <UserForm onSubmit={handleSubmit} />
    </main>
  );
}
