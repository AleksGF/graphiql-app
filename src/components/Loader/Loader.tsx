import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Theme } from '@mui/material';

interface LoaderProps {
  open: boolean;
}

export default function Loader({ open }: LoaderProps) {
  return (
    <Backdrop
      sx={(theme: Theme) => ({
        color: theme.palette.primary.main,
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
