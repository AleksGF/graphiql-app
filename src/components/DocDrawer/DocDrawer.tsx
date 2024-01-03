import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { toggleIsDocDrawerOpen } from '@/store/reducers/appViewSlice';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Box from '@mui/material/Box';
import { ApiDocs } from '@/components';

const DRAWER_MIN_WIDTH = '260px';

const Drawer = styled(MuiDrawer)({
  minWidth: DRAWER_MIN_WIDTH,
});

export default function DocDrawer() {
  const dispatch = useAppDispatch();

  const { isDocDrawerOpen } = useAppSelector((state) => state.appView);

  const closeDrawer = () => {
    dispatch(toggleIsDocDrawerOpen(false));
  };

  return (
    <Drawer
      open={isDocDrawerOpen}
      anchor={'right'}
      onClose={closeDrawer}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
      data-testid={'DocDrawer'}
    >
      <IconButton
        sx={{ alignSelf: 'flex-end' }}
        onClick={closeDrawer}
        data-testid={'CloseDocDrawer'}
      >
        <CloseRoundedIcon />
      </IconButton>
      <Box sx={{ p: 1 }}>
        <ApiDocs />
      </Box>
    </Drawer>
  );
}
