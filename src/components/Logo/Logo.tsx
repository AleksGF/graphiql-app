import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const ImageStyled = styled('img')({
  width: '130px',
});

type Props = {
  href: string;
};

export default function Logo({ href }: Props) {
  return (
    <Link to={href}>
      <ImageStyled src="logo.svg" alt="Logo" />
    </Link>
  );
}
