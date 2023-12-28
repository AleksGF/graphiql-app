import React, { useMemo, memo, ReactElement, useCallback } from 'react';
import { useAppDispatch } from '@/hooks/hooks';
import { toggleIsDocDrawerOpen } from '@/store/reducers/appViewSlice';
import { useLanguageContext } from '@/context/LanguageContext/LanguageContext';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MenuItem from './MenuItem';
import { LANGUAGES } from '@/constants/dictionaries';
import { prettifyContent } from '@/store/reducers/queryEditorSlice';
import { fetchApi } from '@/store/reducers/responseViewSlice';

function EditorMenu() {
  const dispatch = useAppDispatch();
  const { language } = useLanguageContext();

  const openDrawer = useCallback(() => {
    dispatch(toggleIsDocDrawerOpen(true));
  }, [dispatch]);

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
        tooltip: LANGUAGES[language].TOOLTIP_PRETTIFY,
        handler: () => {
          dispatch(prettifyContent());
        },
        child: <CleaningServicesIcon />,
      },
      {
        tooltip: LANGUAGES[language].TOOLTIP_EXECUTE,
        handler: () => {
          dispatch(fetchApi());
        },
        child: <PlayCircleOutlineIcon />,
      },
    ],
    [dispatch, language, openDrawer],
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
    </>
  );
}

export default memo(EditorMenu);
