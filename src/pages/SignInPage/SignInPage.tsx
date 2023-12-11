import UserForm from '@/components/forms/userForm/UserForm';
import { signIn } from '@/services/authService';

export default function SignInPage() {
  const handleSubmit = async (email: string, pass: string) => {
    try {
      await signIn(email, pass);
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
