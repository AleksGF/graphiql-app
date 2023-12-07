import React, { memo } from 'react';
import { Box, Link, Typography, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { RsLogo } from '..';

const FooterStyled = styled('footer')({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

const ICONS_SIZE = 24;

const Footer = memo(() => {
  return (
    <FooterStyled>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Link href={'https://github.com/AleksGF/graphiql-app'}>
            <GitHubIcon sx={{ fontSize: ICONS_SIZE }} />
          </Link>
          <Link href={'https://rs.school/react/'}>
            <RsLogo height={`${ICONS_SIZE}px`} />
          </Link>
        </Box>
        <Typography>2023 Lazy Uploads RS School Team</Typography>
      </Box>
    </FooterStyled>
  );
});

export default Footer;
