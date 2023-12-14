import { Controller, FieldError, useForm } from 'react-hook-form';
import PasswordStrength from './PasswordStrength';
import { useLanguageContext } from '@/context';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Avatar, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { schema } from '@/types/validationSchema';
import { Keys, LANGUAGES } from '@/constants/dictionaries';

type FormProps = {
  title: string;
  onSubmit: (email: string, pass: string) => void;
};

type FormInput = {
  email: string;
  password: string;
};

export default function UserForm({ title, onSubmit }: FormProps) {
  const { language } = useLanguageContext();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInput>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver<FormInput>(schema),
    mode: 'all',
  });
  const onSubmitForm = ({ email, password }: FormInput) => {
    onSubmit(email, password);
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
                helperText={handleError(error)}
              />
              <PasswordStrength password={field.value} />
            </>
          )}
        />
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
