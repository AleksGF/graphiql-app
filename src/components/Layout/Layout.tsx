import { Outlet } from 'react-router';
import { Footer, Header } from '@/components';
import { styled } from '@mui/material';

const AppStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export default function Layout() {
  return (
    <AppStyled className="App">
      <Header />
      <Outlet />
      <Footer />
    </AppStyled>
  );
}
