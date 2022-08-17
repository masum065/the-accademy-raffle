import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Career = () => {
  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          borderLeft: '2px solid #ffffff4f',
          marginTop: '55px',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            top: '-55px',
            left: '40px',
            fontSize: '31px',
            fontFamily: "'chartert' !important",
            '&::before': {
              content: "''",
              left: '-48px',
              top: '50%',
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
              lineHeight: '2 !important',
              letterSpacing: '5px',
              textTransform: 'lowercase',
              fontSize: '20px',
              '& span': { color: '#CF7B3E' },
            }}
          >
            <span>THE UNIVERSITY SYSTEM IN THE WEST IS BROKEN.</span> WE ARE
            EITHER RICH ENOUGH TO HAVE FAMILIES THAT FUND HIGHER EDUCATION, TOO
            POOR TO AFFORD IT, OR SOMEWHERE IN THE MIDDLE - FORCED TO TAKE ON
            UNREASONABLE DEBT TO STAY WITHIN THE SYSTEM. REGARDLESS OF THEIR
            FINACIAL STAKE, THOSE OUTSIDE THE UPPER CLASS WATCH THE ELITE
            INTERNSHIP OPPORTUNITIES BE TAKEN BY THE STUDENTS THAT HAD THE
            CONNECTIONS IN THE FIRST PLACE. THE ACADEMY IS HERE TO OFFER ALL
            THOSE WITH CURIOSITY AND DRIVE AN ALTERNATIVE TO THE CURRENT
            PARADIGM.
          </Typography>

          <Typography
            sx={{
              color: '#CF7B3E',
              fontSize: '22px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              my: 3,
            }}
          >
            SKIP SERVING THEM COFFEE, CREATE WITH OUR PARTNERS IMMEDIATLEY.
          </Typography>

          <Box
            component='img'
            src='/assets/MindotSupporters-2.png'
            sx={{ maxWidth: '100%', my: 4 }}
          />

          <Typography
            sx={{
              lineHeight: '2 !important',
              letterSpacing: '5px',
              textTransform: 'lowercase',
              fontSize: '20px',
              mt: 2,
              '& span': { color: '#CF7B3E' },
            }}
          >
            THE ACADEMY PROVIDES DIRECT COMMUNICATION AND CREATIVE COLABORATION
            WITH THE EMPLOYEES AND EXECUTIVES OF THE WORLDS MOST INFLUENCIAL
            ORGANIZATIONS. SKIP THE PROCESS OF LEARNING THEIR METHODS OR HOW TO
            WORK FOR THEM FROM DISCONNECTED ACADEMICS AND SELF HELP INFLUENCERS.
            WE KNOW THEM PERSONALLY, AND THEY WANT TO KNOW OUR MOST PASSIONATE
            STUDENTS TOO.
          </Typography>

          <Typography
            sx={{
              color: '#CF7B3E',
              fontSize: '22px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              py: 4,
            }}
          >
            HOW OUR LIVE SESSIONS WITH PANELISTS WORK
          </Typography>
        </Box>

        <Grid container>
          {workData.map((data) => (
            <>
              <Grid
                item
                lg={3}
                sx={{
                  borderRight: '1px solid #fff',
                  borderBottom: '1px solid #fff',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  fontWeight: 700,
                  fontSize: '20px',
                  p: 3,
                }}
              >
                {data.title}
              </Grid>
              <Grid
                item
                lg={7}
                sx={{
                  borderBottom: '1px solid #fff',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  p: 3,
                  letterSpacing: '3px',
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
