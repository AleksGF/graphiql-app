import React, { useState } from 'react';
import { useColorModeContext, useLanguageContext } from '@/components/context';
import { LANGUAGES } from '@/constants/dictionaries';
import { DarkMode, Language, LightMode } from '@mui/icons-material';
import {
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import { Logo } from '@/components';
import { useAuthState } from '@/hooks/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { RoutePaths } from '@/routes/routes';

const HeaderStyled = styled('header')({
  display: 'flex',
  padding: '1em',
  justifyContent: 'space-between',
});

export default function Header() {
  const theme = useTheme();
  const colorMode = useColorModeContext();
  const [user] = useAuthState();
  const { language } = useLanguageContext();

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

  // TODO Make it sticky with animation
  // TODO SignOut
  return (
    <HeaderStyled>
      <Logo href={RoutePaths.IndexPage}></Logo>

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

        {user && (
          <>
            <Divider orientation="vertical" sx={{ mx: 1 }} />
            <Button title={LANGUAGES[language].BUTTON_SIGNOUT}>
              <LogoutIcon />
            </Button>
          </>
        )}
      </Typography>
    </HeaderStyled>
  );
}
