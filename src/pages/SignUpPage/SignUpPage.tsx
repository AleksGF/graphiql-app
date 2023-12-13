import UserForm from '@/components/forms/userForm/UserForm';
import { RoutePaths } from '@/routes/routes';
import { signUp } from '@/services/authService';
import { Container, Link } from '@mui/material';

export default function SignUpPage() {
  const handleSubmit = async (email: string, pass: string) => {
    try {
      await signUp(email, pass);
    } catch (e) {
      console.log(e); // TODO Implement user friendly message
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ flex: 1, mb: 8 }}>
      <UserForm title={'Sign Up'} onSubmit={handleSubmit} />
      <Link href={RoutePaths.SignInPage} variant="body2">
        {'Already have an account? Sign in'}
      </Link>
    </Container>
  );
}
