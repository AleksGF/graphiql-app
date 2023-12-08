import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useLanguageContext } from '@/components/context/LanguageContext/LanguageContext';
import { RoutePaths } from '@/routes/routes';
import { LANGUAGES } from '@/constants/dictionaries';

export default function CustomErrorPage() {
  const { language } = useLanguageContext();

  return (
    <Container
      component={'main'}
      sx={{
        mt: '30vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ErrorOutlineIcon fontSize={'large'} />
      <Typography
        component={'h2'}
        sx={{
          pb: '2em',
          fontSize: '1.25em',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {LANGUAGES[language].TITTLE_ERROR}
      </Typography>
      <Typography paragraph={true} sx={{ textAlign: 'center' }}>
        {LANGUAGES[language].ERROR_MESSAGE}
      </Typography>
      <Typography paragraph={true} sx={{ textAlign: 'center' }}>
        {LANGUAGES[language].GO_TO}{' '}
        <Link to={RoutePaths.IndexPage}>{LANGUAGES[language].HOME_PAGE}</Link>
      </Typography>
    </Container>
  );
}
