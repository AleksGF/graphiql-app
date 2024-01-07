import React, { Suspense, lazy, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { toggleIsDocDrawerOpen } from '@/store/reducers/appViewSlice';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Box from '@mui/material/Box';
import { fetchApiTypesList } from '@/store/reducers/apiDocsSlice';
import { CircularProgress } from '@mui/material';

const DRAWER_MIN_WIDTH = '320px';

const Drawer = styled(MuiDrawer)({
  minWidth: DRAWER_MIN_WIDTH,
});

const ApiDocs = lazy(() => import('@/components/ApiDocs/ApiDocs'));

export default function DocDrawer() {
  const dispatch = useAppDispatch();

  const { isDocDrawerOpen } = useAppSelector((state) => state.appView);

  const { apiUrl, apiAddingError, isApiFetching } = useAppSelector(
    (state) => state.apiEndpoint,
  );

  const { apiDocsError, isApiDocsFetching } = useAppSelector(
    (state) => state.apiDocs,
  );

  useEffect(() => {
    if (!apiAddingError && !isApiFetching) {
      dispatch(fetchApiTypesList(apiUrl));
    }
  }, [apiAddingError, apiUrl, dispatch, isApiFetching]);

  const closeDrawer = () => {
    dispatch(toggleIsDocDrawerOpen(false));
  };

  return !apiDocsError && !isApiDocsFetching ? (
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
        <Suspense fallback={<Loading />}>
          <ApiDocs />
        </Suspense>
      </Box>
    </Drawer>
  ) : null;
}

function Loading() {
  return (
    <Box
      sx={{
        minWidth: DRAWER_MIN_WIDTH,
        height: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
