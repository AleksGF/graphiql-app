import React, { memo } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const TIME_TO_SHOW = 10000; // 10sec
const MAX_WIDTH = 300; //300px

interface ErrorMessageProps {
  isOpen: boolean;
  message: string;
  handleClose: VoidFunction;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant={'filled'}
      severity={'error'}
      {...props}
    />
  );
});

function ErrorMessage({ isOpen, message, handleClose }: ErrorMessageProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isOpen}
      autoHideDuration={TIME_TO_SHOW}
      onClose={handleClose}
      sx={{ maxWidth: MAX_WIDTH }}
    >
      <Alert onClose={handleClose} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default memo(ErrorMessage);
