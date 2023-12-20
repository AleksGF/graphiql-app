import { UserForm } from '@/components';
import { useLanguageContext } from '@/context';
import { LANGUAGES } from '@/constants/dictionaries';
import { RoutePaths } from '@/routes/routes';
import { signUp } from '@/services/authService';
import { Container, Link } from '@mui/material';

export default function SignUpPage() {
  const { language } = useLanguageContext();

  return (
    <Container component="main" maxWidth="xs" sx={{ flex: 1, mb: 8 }}>
      <UserForm
        title={LANGUAGES[language].SIGNUP_TITLE}
        errorMessage={LANGUAGES[language].SIGNUP_MESSAGE}
        authHandler={signUp}
      />
      <Link href={RoutePaths.SignInPage} variant="body2">
        {LANGUAGES[language].SIGNUP_LINK}
      </Link>
    </Container>
  );
}
