import { styled, useTheme } from '@mui/material';
import React, { memo } from 'react';

type Props = {
  height?: string;
};

const RsLogoStyled = styled('img')({
  width: 'auto',
});

const RsLogo = memo(({ height = '24px' }: Props) => {
  const theme = useTheme();

  return theme.palette.mode === 'dark' ? (
    <RsLogoStyled
      src="rs_school_js_lighter.svg"
      alt="RS School Logo"
      height={height}
      data-testid={'rslogo_light'}
    />
  ) : (
    <RsLogoStyled
      src="rs_school_js_darker.svg"
      alt="RS School Logo"
      height={height}
      data-testid={'rslogo_dark'}
    />
  );
});

export default RsLogo;
