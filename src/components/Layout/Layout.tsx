import { Outlet } from 'react-router';
import { styled } from '@mui/material';
import { useAppSelector } from '@/hooks/hooks';
import { Footer, Header, Loader } from '@/components';

const AppStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export default function Layout() {
  const { isLoading } = useAppSelector((state) => state.user);
  const { isApiFetching } = useAppSelector((state) => state.apiEndpoint);
  const { isFetching } = useAppSelector((state) => state.responseViewer);

  const isLoaderOpen = isLoading || isApiFetching || isFetching;

  return (
    <AppStyled className="App">
      <Header />
      <Outlet />
      <Footer />
      <Loader open={isLoaderOpen} />
    </AppStyled>
  );
}
