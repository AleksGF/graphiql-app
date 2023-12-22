import { UserForm } from '@/components';
import { Link as RouterLink } from 'react-router-dom';
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
      <Link component={RouterLink} to={RoutePaths.SignInPage} variant="body2">
        {LANGUAGES[language].SIGNUP_LINK}
      </Link>
    </Container>
  );
}
