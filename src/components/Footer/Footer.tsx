import React, { memo } from 'react';
import { Box, Link, Typography, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { RsLogo } from '@/components';

const FooterStyled = styled('footer')({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

const GithubLinksStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1em 0.3em 0.3em',
  color: theme.palette.text.primary,
}));

const ICONS_SIZE = 24;

const Footer = memo(() => {
  return (
    <FooterStyled>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <GithubLinksStyled href={'https://github.com/DanilBogdanov'}>
            <GitHubIcon sx={{ fontSize: ICONS_SIZE }} />
            Danil Bogdanov
          </GithubLinksStyled>
          <GithubLinksStyled href={'https://github.com/AleksGF'}>
            <GitHubIcon sx={{ fontSize: ICONS_SIZE }} />
            Oleksiy Chuguyenko
          </GithubLinksStyled>
          <GithubLinksStyled href={'https://github.com/severgun'}>
            <GitHubIcon sx={{ fontSize: ICONS_SIZE }} />
            Sergey Vergun
          </GithubLinksStyled>
        </Box>
        <Typography>2023 Lazy Uploads RS School Team</Typography>
        <Link href={'https://rs.school/react/'}>
          <RsLogo height={`${ICONS_SIZE}px`} />
        </Link>
      </Box>
    </FooterStyled>
  );
});

export default Footer;
