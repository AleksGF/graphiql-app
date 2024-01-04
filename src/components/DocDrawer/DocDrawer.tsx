import React, { Suspense, lazy } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { toggleIsDocDrawerOpen } from '@/store/reducers/appViewSlice';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Box from '@mui/material/Box';

const DRAWER_MIN_WIDTH = '320px';

const Drawer = styled(MuiDrawer)({
  minWidth: DRAWER_MIN_WIDTH,
});
//TODO: Make Suspense work?
const ApiDocs = lazy(() => import('@/components/ApiDocs/ApiDocs'));

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
    >
      <IconButton sx={{ alignSelf: 'flex-end' }} onClick={closeDrawer}>
        <CloseRoundedIcon />
      </IconButton>
      <Box sx={{ p: 1 }}>
        <Suspense fallback={<Loading />}>
          <ApiDocs />
        </Suspense>
      </Box>
    </Drawer>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
