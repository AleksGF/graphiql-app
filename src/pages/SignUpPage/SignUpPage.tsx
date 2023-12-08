import { useNavigate } from 'react-router-dom';
import UserForm from '@/components/forms/userForm/UserForm';
import { RoutePaths } from '@/routes/routes';
import { signUp } from '@/services/authService';

export default function SignUpPage() {
  const navigate = useNavigate();

  const handleSubmit = async (email: string, pass: string) => {
    try {
      await signUp(email, pass);
      navigate(RoutePaths.MainPage);
    } catch (e) {
      console.log(e); // TODO Implement user friendly message
    }
  };

  return (
    <main>
      <h2>Registration</h2>
      <UserForm onSubmit={handleSubmit} />
    </main>
  );
}
