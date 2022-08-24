import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Career = () => {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          borderLeft: '2px solid #000000a8',
          marginTop: '170px',
          marginBottom: '100px',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            top: '-70px',
            left: '40px',
            fontSize: '38px',
            fontFamily: "'chartert' !important",
            '&::before': {
              content: "''",
              left: '-48px',
              top: '40%',
              height: '15px',
              width: '15px',
              background: '#4EA5B8',
              position: 'absolute',
              borderRadius: '502%',
            },
          }}
        >
          CAREER CURATION
        </Typography>
        <Box sx={{ pl: '20px' }}>
          <Typography
            sx={{
              pt: 4,
              lineHeight: '1.7 !important',
              letterSpacing: '2px',
              fontSize: '32px',
              fontWeight: 300,
              fontFamily: 'inherit',
              '& span': { color: '#CF7B3E' },
            }}
          >
            <span>
              At The Accademy, the companies and organizations you want to work
              with are the companies and organizations that teach you.{' '}
            </span>
            There is no middle-man, our mentors are the engineers, scientists,
            designers and artistsmaking the decisions that shape our worlds
            cultures and economies.
          </Typography>

          <Box
            component='img'
            src='/assets/MindotSupporters.png'
            sx={{ maxWidth: '100%', my: 4 }}
          />

          <Typography
            sx={{
              color: '#CF7B3E',
              fontSize: '35px',
              fontWeight: 500,
              fontStyle: 'italic',
              fontFamily: 'inherit',
              my: 5,
            }}
          >
            Skip serving them coffee, create with the world’s most influencial
            companies and organizations immediately.
          </Typography>
          <Typography
            sx={{
              lineHeight: '1.7 !important',
              letterSpacing: '2px',
              fontSize: '32px',
              fontWeight: 300,
              fontFamily: 'inherit',
              mt: 2,
              '& span': { color: '#CF7B3E' },
            }}
          >
            Each Accademy session involves a focused, live colaboration session
            with panelists from the companies listed above. Students have
            achance to show their creativity and brilliance to the worlds
            leading thinkers directly.
          </Typography>

          <Typography
            sx={{
              color: '#CF7B3E',
              fontSize: '35px',
              fontWeight: 500,
              fontStyle: 'italic',
              fontFamily: 'inherit',

              my: 5,
              mt: 8,
            }}
          >
            Live session brekdown:
          </Typography>
        </Box>

        <Grid container>
          {workData.map((data) => (
            <>
              <Grid
                item
                lg={3}
                sx={{
                  borderRight: '1px solid #000',
                  borderBottom: '1px solid #000',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  fontWeight: 500,
                  fontSize: '30px',
                  p: 3,
                }}
              >
                {data.title}
              </Grid>
              <Grid
                item
                lg={7}
                sx={{
                  borderBottom: '1px solid #000',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  p: 3,
                  letterSpacing: '3px',
                  fontSize: '26px',
                  fontFamily: 'inherit',
                }}
              >
                {data.description}
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const workData = [
  {
    title: 'Opening talk with panelists',
    description:
      'Each live session opens with a talk from leaders in their respective field. Engineers, designers, and executives in leading companies and organizations - spiritual teachers and artists from every decipline and practice.',
  },
  {
    title: 'Round table discussion',
    description:
      'Each live session opens with a talk from leaders in their respective field. Engineers, designers, and executives in leading companies and organizations - spiritual teachers and artists from every decipline and practice.',
  },
  {
    title: 'Design challenge / growth excercise',
    description:
      'Each live session opens with a talk from leaders in their respective field. Engineers, designers, and executives in leading companies and organizations - spiritual teachers and artists from every decipline and practice.',
  },
  {
    title: 'Presentation of work by students',
    description:
      'Each live session opens with a talk from leaders in their respective field. Engineers, designers, and executives in leading companies and organizations - spiritual teachers and artists from every decipline and practice.',
  },
  {
    title: 'Reverse roundtable & awards',
    description:
      'Each live session opens with a talk from leaders in their respective field. Engineers, designers, and executives in leading companies and organizations - spiritual teachers and artists from every decipline and practice.',
  },
];
