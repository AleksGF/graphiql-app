import UserForm from '@/components/forms/userForm/UserForm';
import { signUp } from '@/services/authService';

export default function SignUpPage() {
  const handleSubmit = async (email: string, pass: string) => {
    try {
      await signUp(email, pass);
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
