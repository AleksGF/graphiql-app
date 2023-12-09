import React, { PropsWithChildren } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';

interface MenuItemsProps extends PropsWithChildren {
  isOpen: boolean;
  clickHandler: VoidFunction;
  tooltip: string;
}

export default function MenuItem({
  isOpen,
  clickHandler,
  tooltip,
  children,
}: MenuItemsProps) {
  return (
    <ListItem disablePadding sx={{ display: 'block' }} onClick={clickHandler}>
      <Tooltip title={tooltip} placement={'right'} arrow>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: isOpen ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {children}
          </ListItemIcon>
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
}
