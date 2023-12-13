import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Avatar, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { schema } from '@/types/validationSchema';

type FormProps = {
  title: string;
  onSubmit: (email: string, pass: string) => void;
};

type FormInput = {
  email: string;
  password: string;
};

export default function UserForm({ title, onSubmit }: FormProps) {
  const { control, handleSubmit } = useForm<FormInput>({
    resolver: yupResolver<FormInput>(schema),
    defaultValues: { email: '', password: '' },
    mode: 'all',
  });

  const onSubmitForm = ({ email, password }: FormInput) => {
    onSubmit(email, password);
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
              label="Email"
              autoFocus
              {...field}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              error={!!error}
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              {...field}
              helperText={error?.message}
            />
          )}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {title.toUpperCase()}
        </Button>
      </Box>
    </Box>
  );
}
