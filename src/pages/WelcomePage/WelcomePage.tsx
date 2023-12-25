import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/hooks';
import { useLanguageContext } from '@/context';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  styled,
} from '@mui/material';
import { ProfileCard } from '@/components';
import { RoutePaths } from '@/routes/routes';
import { LANGUAGES } from '@/constants/dictionaries';
import { Colors } from '@/constants/colors';

export default function WelcomePage() {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  const { user } = useAppSelector((state) => state.user);

  const SpanStyled = styled('span')({
    color: Colors.GraphQLColor,
  });

  // TODO Swap 'Sign in' button to 'Main' and 'Sign Up' to 'Log Out' if user logged in.
  // If user must be redirected to Main when logged in, how he will see Main button?
  return (
    <main>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
          }}
        >
          {user ? (
            <Button
              variant="outlined"
              onClick={() => {
                navigate(RoutePaths.MainPage);
              }}
            >
              {LANGUAGES[language].BUTTON_MAIN}
            </Button>
          ) : (
            <>
              <ButtonGroup variant="outlined">
                <Button
                  onClick={() => {
                    navigate(RoutePaths.SignInPage);
                  }}
                >
                  {LANGUAGES[language].BUTTON_SIGNIN}
                </Button>
                <Button
                  onClick={() => {
                    navigate(RoutePaths.SignUpPage);
                  }}
                  variant="contained"
                  disableElevation
                >
                  {LANGUAGES[language].BUTTON_SIGNUP}
                </Button>
              </ButtonGroup>
            </>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: 'calc(100vh - 119px)',
          }}
        >
          <Typography
            component={'h1'}
            variant={'h1'}
            sx={{
              fontSize: '2.5em',
            }}
          >
            {LANGUAGES[language].TITLE_WELCOME}
            <br />
            {LANGUAGES[language].TITLE_WELCOME_2}
            <SpanStyled>GraphiQL</SpanStyled>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginBottom: '2em',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography
              gutterBottom
              component={'h2'}
              variant={'h2'}
              sx={{
                textAlign: 'center',
                fontSize: '2em',
              }}
            >
              {LANGUAGES[language].TEXT_WELCOME}
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Typography
              component={'h3'}
              variant="h2"
              sx={{
                textAlign: 'center',
                fontSize: '1.5em',
                my: '2em',
              }}
            >
              {LANGUAGES[language].TEXT_OUR_TEAM}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <ProfileCard
                imgSrc={'placeholder-man-1.jpg'}
                imgAlt={'Man photo'}
                personName={LANGUAGES[language].MEMBER_1_NAME}
                occupation={LANGUAGES[language].MEMBER_1_OCCUPATION}
                description={LANGUAGES[language].MEMBER_1_DESC}
                href={'https://github.com/DanilBogdanov'}
              />

              <ProfileCard
                imgSrc={'placeholder-man-2.jpg'}
                imgAlt={'Man photo'}
                personName={LANGUAGES[language].MEMBER_2_NAME}
                occupation={LANGUAGES[language].MEMBER_2_OCCUPATION}
                description={LANGUAGES[language].MEMBER_2_DESC}
                href={'https://github.com/AleksGF'}
              />

              <ProfileCard
                imgSrc={'placeholder-man-3.jpg'}
                imgAlt={'Man photo'}
                personName={LANGUAGES[language].MEMBER_3_NAME}
                occupation={LANGUAGES[language].MEMBER_3_OCCUPATION}
                description={LANGUAGES[language].MEMBER_3_DESC}
                href={'https://github.com/severgun'}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
