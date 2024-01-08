import { useEffect, useState } from 'react';
import { Box, LinearProgress } from '@mui/material';
import {
  StrengthColor,
  getPasswordStrength,
  getStrengthColor,
} from '@/utils/form';

type Props = {
  password: string;
};

export default function PasswordStrength({ password }: Props) {
  const [passStrength, setPassStrength] = useState<number>(0);
  const [color, setColor] = useState<StrengthColor>(StrengthColor.VeryWeak);

  useEffect(() => {
    const strength = getPasswordStrength(password);
    setPassStrength(strength);

    setColor(getStrengthColor(strength));
  }, [password]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <LinearProgress
          variant="determinate"
          color={color}
          value={passStrength}
        />
      </Box>
    </>
  );
}
