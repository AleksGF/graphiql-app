import { ProfileCard } from '@/components';
import { useLanguageContext } from '@/components/context';
import { LANGUAGES } from '@/constants/dictionaries';
import { Box, Container, Typography, styled } from '@mui/material';

const GraphiQLColor = '#E10098';

export default function WelcomePage() {
  const { language } = useLanguageContext();

  const SpanStyled = styled('span')({
    color: GraphiQLColor,
  });

  return (
    <main>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: 'calc(100vh - 82px)',
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
          <Box>
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
                width: '100%',
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
