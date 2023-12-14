import { useState } from 'react';
import { UserForm } from '@/components';
import { useLanguageContext } from '@/context';
import { LANGUAGES } from '@/constants/dictionaries';
import { RoutePaths } from '@/routes/routes';
import { ERROR_SHOW_TIME } from '@/constants/form';
import { signUp } from '@/services/authService';
import { Container, Link, Alert, Fade } from '@mui/material';

export default function SignUpPage() {
  const { language } = useLanguageContext();
  const [isAlertShow, setIsAlertShow] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<number | null>(null);

  const showAlert = () => {
    if (timerId) {
      clearTimeout(timerId);
    }

    const timer = setTimeout(() => {
      setIsAlertShow(false);
      setTimerId(null);
    }, ERROR_SHOW_TIME);

    setTimerId(+timer);
    setIsAlertShow(true);
  };

  const handleSubmit = async (email: string, pass: string) => {
    try {
      await signUp(email, pass);
    } catch {
      showAlert();
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ flex: 1, mb: 8 }}>
      <Fade in={isAlertShow}>
        <Alert severity="error">{LANGUAGES[language].SIGNUP_MESSAGE}</Alert>
      </Fade>
      <UserForm
        title={LANGUAGES[language].SIGNUP_TITLE}
        onSubmit={handleSubmit}
      />
      <Link href={RoutePaths.SignInPage} variant="body2">
        {LANGUAGES[language].SIGNUP_LINK}
      </Link>
    </Container>
  );
}
