import UserForm from '@/components/forms/userForm/UserForm';
import { RoutePaths } from '@/routes/routes';
import { signIn } from '@/services/authService';
import { Container, Link } from '@mui/material';

export default function SignInPage() {
  const handleSubmit = async (email: string, pass: string) => {
    try {
      await signIn(email, pass);
    } catch (e) {
      console.log(e); // TODO Implement user friendly message
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ flex: 1, mb: 8 }}>
      <UserForm title={'Sign In'} onSubmit={handleSubmit} />
      <Link href={RoutePaths.SignUpPage} variant="body2">
        {"Don't have an account? Sign Up"}
      </Link>
    </Container>
  );
}
