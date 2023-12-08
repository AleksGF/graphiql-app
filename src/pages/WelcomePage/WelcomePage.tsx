import { ProfileCard } from '@/components';
import { Box, Container, Typography, styled } from '@mui/material';

const GRAPHQL_MAIN_COLOR = '#E10098';

const TitleStyled = styled('span')({
  color: GRAPHQL_MAIN_COLOR,
});

// TODO Add team members info
export default function WelcomePage() {
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
            Welcome to our <TitleStyled>GraphiQL</TitleStyled> clone
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
            This project is a final task of React Course by The Rolling Scopes
            School.
            <br /> It is an interactive in-browser GraphQL IDE/playground.
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
            Our Team
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <ProfileCard
              imgSrc={'placeholder-man-1.jpg'}
              imgAlt={'Man photo'}
              personName={'Danil Bogdanov'}
              occupation={'Lorem ipsum dolor sit'}
              description={
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.'
              }
              href={'https://github.com/DanilBogdanov'}
            />

            <ProfileCard
              imgSrc={'placeholder-man-2.jpg'}
              imgAlt={'Man photo'}
              personName={'Oleksiy Chuguyenko'}
              occupation={'Lorem ipsum dolor sit'}
              description={
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.'
              }
              href={'https://github.com/AleksGF'}
            />

            <ProfileCard
              imgSrc={'placeholder-man-3.jpg'}
              imgAlt={'Man photo'}
              personName={'Sergey Vergun'}
              occupation={'HPC System Administrator'}
              description={
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.'
              }
              href={'https://github.com/severgun'}
            />
          </Box>
        </Box>
      </Container>
    </main>
  );
}
