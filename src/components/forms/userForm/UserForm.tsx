import { useState } from 'react';
import { Controller, FieldError, useForm } from 'react-hook-form';
import PasswordStrength from './PasswordStrength';
import { useLanguageContext } from '@/context';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, schemaWithConfirmPass } from '@/types/validationSchema';
import { Keys, LANGUAGES } from '@/constants/dictionaries';
import { ERROR_SHOW_TIME } from '@/constants/form';
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Alert,
  Fade,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type FormProps = {
  title: string;
  errorMessage: string;
  authHandler: (email: string, pass: string) => Promise<void>;
  shouldConfirmPass?: boolean;
};

type FormInput = {
  email: string;
  password: string;
};

type FormInputConf = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export default function UserForm({
  title,
  errorMessage,
  authHandler,
  shouldConfirmPass = false,
}: FormProps) {
  const { language } = useLanguageContext();
  const [isAlertShow, setIsAlertShow] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<number | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInput | FormInputConf>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    resolver: yupResolver<FormInput | FormInputConf>(
      shouldConfirmPass ? schemaWithConfirmPass : schema,
    ),
    mode: 'all',
  });

  const onSubmitForm = async ({ email, password }: FormInput) => {
    try {
      await authHandler(email, password);
    } catch {
      showAlert();
    }
  };

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

  const handleError = (error?: FieldError) => {
    if (error && error.message) {
      if (error.message in Keys) {
        return LANGUAGES[language][error.message as Keys];
      }

      return LANGUAGES[language].USER_FORM_VALIDATION;
    }

    return null;
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Fade in={isAlertShow}>
        <Alert severity="error">{errorMessage}</Alert>
      </Fade>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitForm)}
        noValidate
        sx={{ mt: 1 }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error}
              margin="normal"
              required
              fullWidth
              label={LANGUAGES[language].USER_FORM_EMAIL}
              autoFocus
              {...field}
              sx={{ minHeight: '5rem' }}
              helperText={handleError(error)}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextField
                error={!!error}
                margin="normal"
                required
                fullWidth
                label={LANGUAGES[language].USER_FORM_PASSWORD}
                type="password"
                {...field}
                sx={{ minHeight: '5rem' }}
                helperText={handleError(error)}
              />
              <PasswordStrength password={field.value} />
            </>
          )}
        />
        {shouldConfirmPass && (
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                error={!!error}
                margin="normal"
                required
                fullWidth
                label={LANGUAGES[language].USER_FORM_CONFIRM_PASSWORD}
                type="password"
                {...field}
                sx={{ minHeight: '5rem' }}
                helperText={handleError(error)}
              />
            )}
          />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={!isValid}
          sx={{ mt: 3, mb: 2 }}
        >
          {title.toUpperCase()}
        </Button>
      </Box>
    </Box>
  );
}
