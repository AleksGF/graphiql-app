import React, { useState, useMemo, memo, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import { useLanguageContext } from '@/components/context/LanguageContext/LanguageContext';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ApiDocs from '../ApiDocs/ApiDocs';
import MenuItem from './MenuItem';
import { LANGUAGES } from '@/constants/dictionaries';

const DRAWER_MIN_WIDTH = '260px';

const Drawer = styled(MuiDrawer)({
  minWidth: DRAWER_MIN_WIDTH,
});

function EditorMenu() {
  const { language } = useLanguageContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  // TODO Add prettify handler
  // TODO Add make request handler
  const menuItemList: {
    tooltip: string;
    handler: VoidFunction;
    child: ReactElement;
  }[] = useMemo(
    () => [
      {
        tooltip: LANGUAGES[language].TOOLTIP_SHOW_DOC,
        handler: openDrawer,
        child: <MenuBookIcon />,
      },
      {
        tooltip: LANGUAGES[language].TOOLTIP_EXECUTE,
        handler: () => {},
        child: <CleaningServicesIcon />,
      },
      {
        tooltip: LANGUAGES[language].TOOLTIP_PRETTIFY,
        handler: () => {},
        child: <PlayCircleOutlineIcon />,
      },
    ],
    [language],
  );

  return (
    <>
      <Box>
        <List
          sx={({ breakpoints }) => ({
            display: 'flex',
            flexDirection: 'row',
            [breakpoints.up('sm')]: {
              flexDirection: 'column',
            },
          })}
        >
          {menuItemList.map((item, index) => (
            <MenuItem
              key={index}
              clickHandler={item.handler}
              tooltip={item.tooltip}
            >
              {item.child}
            </MenuItem>
          ))}
        </List>
      </Box>
      <Drawer
        open={isOpen}
        anchor={'right'}
        onClose={closeDrawer}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <IconButton sx={{ alignSelf: 'flex-end' }} onClick={closeDrawer}>
          <CloseRoundedIcon />
        </IconButton>
        <Box sx={{ p: 1 }}>
          <ApiDocs />
        </Box>
      </Drawer>
    </>
  );
}

export default memo(EditorMenu);
