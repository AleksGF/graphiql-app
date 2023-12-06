import { styled } from '@mui/material';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const ImageStyled = styled('img')({
  width: '130px',
});

type Props = {
  href: string;
};

const Logo = memo(({ href }: Props) => {
  return (
    <Link to={href}>
      <ImageStyled src="logo.svg" alt="Logo" />
    </Link>
  );
});

export default Logo;
