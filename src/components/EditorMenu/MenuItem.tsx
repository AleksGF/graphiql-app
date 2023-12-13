import React, { memo, PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import MuiTooltip, {
  TooltipProps,
  tooltipClasses,
} from '@mui/material/Tooltip';

interface MenuItemsProps extends PropsWithChildren {
  clickHandler: VoidFunction;
  tooltip: string;
}

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 60,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 300,
    },
  },
}));

function MenuItem({ clickHandler, tooltip, children }: MenuItemsProps) {
  return (
    <ListItem disablePadding sx={{ display: 'block' }} onClick={clickHandler}>
      <ListItemButton
        sx={{
          minHeight: 40,
          flexGrow: 0,
          justifyContent: 'center',
          p: 1,
        }}
      >
        <Tooltip title={tooltip} placement={'right'} arrow>
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: 'center',
            }}
          >
            {children}
          </ListItemIcon>
        </Tooltip>
      </ListItemButton>
    </ListItem>
  );
}
export default memo(MenuItem);
