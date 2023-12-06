import React, { useContext, useState } from 'react';
import { ColorModeContext } from '@/App';
import { DarkMode, Language, LightMode } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  Divider,
  Menu,
  MenuItem,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { Logo } from '@/components';

const HeaderStyled = styled('header')({
  display: 'flex',
  padding: '1em 1em',
  justifyContent: 'space-between',
});

export default function Header() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const handleLangClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangClose = () => {
    setAnchorEl(null);
  };

  // TODO Swap 'Sign in' button to 'Main' and 'Sign Up' to 'Log Out' if user logged in.
  // TODO Make it sticky with animation
  return (
    <HeaderStyled>
      <Logo href={'/'}></Logo>

      <Typography component={'div'} sx={{ display: 'flex', width: 'auto' }}>
        <Button onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <LightMode color="primary" />
          ) : (
            <DarkMode color="primary" />
          )}
        </Button>
        <Button onClick={handleLangClick}>
          <Language />
        </Button>
        <Menu open={open} onClose={handleLangClose} anchorEl={anchorEl}>
          <MenuItem>English</MenuItem>
          <MenuItem>Russian</MenuItem>
        </Menu>

        <Divider orientation="vertical" sx={{ mx: 1 }} />

        <ButtonGroup variant="outlined">
          <Button>Sign In</Button>
          <Button variant="contained" disableElevation>
            Sign Up
          </Button>
        </ButtonGroup>
      </Typography>
    </HeaderStyled>
  );
}
