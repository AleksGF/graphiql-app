import { UserForm } from '@/components';
import { useLanguageContext } from '@/context';
import { LANGUAGES } from '@/constants/dictionaries';
import { RoutePaths } from '@/routes/routes';
import { signIn } from '@/services/authService';
import { Container, Link } from '@mui/material';

export default function SignInPage() {
  const { language } = useLanguageContext();

  return (
    <Container component="main" maxWidth="xs" sx={{ flex: 1, mb: 8 }}>
      <UserForm
        title={LANGUAGES[language].SIGNIN_TITLE}
        errorMessage={LANGUAGES[language].SIGNIN_MESSAGE}
        authHandler={signIn}
      />
      <Link href={RoutePaths.SignUpPage} variant="body2">
        {LANGUAGES[language].SIGNIN_LINK}
      </Link>
    </Container>
  );
}
