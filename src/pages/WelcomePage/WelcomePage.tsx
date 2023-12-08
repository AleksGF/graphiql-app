import { ProfileCard } from '@/components';
import { useLanguageContext } from '@/components/context';
import { LANGUAGES } from '@/constants/dictionaries';
import { Box, Container, Typography, styled } from '@mui/material';

const GRAPHQL_MAIN_COLOR = '#E10098';

// TODO: Split localized strings to wrap them in tags.
const TitleStyled = styled('span')({
  color: GRAPHQL_MAIN_COLOR,
});

export default function WelcomePage() {
  const { language } = useLanguageContext();

  return (
    <main>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '2em 0',
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
          </Typography>
        </Box>
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
            gutterBottom
            sx={{
              textAlign: 'center',
              fontSize: '1.5em',
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
      </Container>
    </main>
  );
}
