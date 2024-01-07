import React, { useEffect, useState } from 'react';
import { useColorModeContext, useLanguageContext } from '@/context';
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
import LogoutIcon from '@mui/icons-material/Logout';
import { RoutePaths } from '@/routes/routes';
import { useAppSelector } from '@/hooks/hooks';

const STICKY_SCROLL_VALUE = 150;

interface HeaderProps {
  sticky: boolean;
}

const HeaderStyled = styled('header', {
  shouldForwardProp: (prop) => prop !== 'sticky',
})<HeaderProps>(({ sticky }) => {
  return sticky
    ? {
        display: 'flex',
        padding: '1em',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        animation: '0.3s linear 0s 1 alternate slide',
        '@keyframes slide': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-200%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }
    : {
        display: 'flex',
        padding: '1em',
        justifyContent: 'space-between',
      };
});

export default function Header() {
  const theme = useTheme();
  const colorMode = useColorModeContext();
  const { user } = useAppSelector((state) => state.user);
  const { language } = useLanguageContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const [sticky, setSticky] = useState<boolean>(false);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= STICKY_SCROLL_VALUE;
    setSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const handleLangClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangClose = () => {
    setAnchorEl(null);
  };

  // TODO SignOut
  return (
    <HeaderStyled sticky={sticky}>
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
