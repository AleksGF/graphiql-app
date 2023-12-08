import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

// TODO implement Welcome Page
const MainStyled = styled('main')({
  flex: 1,
});

export default function WelcomePage() {
  return (
    <MainStyled>
      Welcome Page <Link to={'/some-bad-route'}>Bad route</Link>
    </MainStyled>
  );
}
