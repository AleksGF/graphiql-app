import React, { memo, useState } from 'react';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import { ClickAwayListener } from '@mui/base';
import MuiList from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MenuItem from './MenuItem';
import ApiDocs from '../ApiDocs/ApiDocs';
import { useLanguageContext } from '@/components/context/LanguageContext/LanguageContext';
import { LANGUAGES } from '@/constants/dictionaries';

const DRAWER_WIDTH = 320;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  position: 'relative',
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      position: 'absolute',
      display: 'flex',
      flexDirection: 'row',
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      position: 'absolute',
    },
  }),
}));

const List = styled(MuiList)(({ theme }) => ({
  width: closedMixin(theme).width,
}));

function SideMenu() {
  const { language } = useLanguageContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleDrawerToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <Drawer variant="permanent" open={isOpen}>
        <List>
          <MenuItem
            isOpen={isOpen}
            clickHandler={handleDrawerToggle}
            tooltip={
              isOpen
                ? LANGUAGES[language].TOOLTIP_HIDE_DOC
                : LANGUAGES[language].TOOLTIP_SHOW_DOC
            }
          >
            <MenuBookIcon />
          </MenuItem>
          {/* TODO Add prettify handler */}
          <MenuItem
            isOpen={isOpen}
            clickHandler={() => {}}
            tooltip={LANGUAGES[language].TOOLTIP_EXECUTE}
          >
            <CleaningServicesIcon />
          </MenuItem>
          {/* TODO Add make request handler */}
          <MenuItem
            isOpen={isOpen}
            clickHandler={() => {}}
            tooltip={LANGUAGES[language].TOOLTIP_PRETTIFY}
          >
            <PlayCircleOutlineIcon />
          </MenuItem>
        </List>
        {isOpen && <ApiDocs />}
      </Drawer>
    </ClickAwayListener>
  );
}

export default memo(SideMenu);
