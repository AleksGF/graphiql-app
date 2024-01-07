import React, { useState, useEffect } from 'react';
import { useColorModeContext, useLanguageContext } from '@/context';
import { Langs, LANGUAGES } from '@/constants/dictionaries';
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
import { logOut } from '@/services/authService';

type HeaderProps = {
  isScrolled: boolean;
};

const HeaderStyled = styled('header')<HeaderProps>(
  ({ isScrolled, theme: { breakpoints } }) => ({
    position: 'sticky',
    top: 0,
    zIndex: '1',
    display: 'flex',
    padding: '1em',
    justifyContent: 'space-between',
    filter: isScrolled ? 'grayscale(50%)' : 'none',
    backdropFilter: 'blur(16px)',
    transition: 'all 0.3s',
    animation: isScrolled ? 'slideDown 0.35s ease-out' : 'none',
    [breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
    '&:hover': {
      filter: 'none',
    },
    '@keyframes slideDown': {
      from: {
        transform: 'translateY(-100%)',
      },
      to: {
        transform: 'translateY(0)',
      },
    },
  }),
);

export default function Header() {
  const theme = useTheme();
  const colorMode = useColorModeContext();
  const { user } = useAppSelector((state) => state.user);
  const { language, setLanguage } = useLanguageContext();

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  const handleSignOut = async () => {
    await logOut();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderStyled isScrolled={isScrolled}>
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
          {Object.keys(Langs).map((lang) => (
            <MenuItem
              key={lang}
              selected={lang === language}
              onClick={() => {
                setLanguage(lang as Langs);
                setAnchorEl(null);
              }}
            >
              {LANGUAGES[lang as Langs].NAME}
            </MenuItem>
          ))}
        </Menu>

        {user && (
          <>
            <Divider orientation="vertical" sx={{ mx: 1 }} />
            <Button
              title={LANGUAGES[language].BUTTON_SIGNOUT}
              onClick={handleSignOut}
            >
              <LogoutIcon />
            </Button>
          </>
        )}
      </Typography>
    </HeaderStyled>
  );
}
