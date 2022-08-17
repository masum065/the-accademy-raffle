import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

export const Hero = () => {
  return (
    <Box
      sx={{
        background: `url('/assets/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component='img'
        src='/assets/student-circle.png'
        sx={{
          maxWidth: '680px',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '-5%',
          position: 'absolute',
        }}
      />
      <Container maxWidth='xl' sx={{ py: 6 }}>
        <Grid container>
          <Grid item lg={12}>
            <Typography
              variant='h1'
              sx={{
                fontWeight: 'bold',
                letterSpacing: '10px',
                lineHeight: 1,
                fontSize: '7rem',
                mb: 3,
                mt: 2,
              }}
            >
              CREATIVY &amp; <br />
              DRIVE
            </Typography>
            <Typography sx={{ color: '#CF7B3E' }} variant='h4'>
              Valued &amp; cultivated.
            </Typography>
            <Typography
              sx={{
                fontSize: '23px',
                maxWidth: '53%',
                fontWeight: 100,
                fontStyle: 'italic',
                marginTop: '45px',
                '& b': { fontWeight: 'bold !important' },
              }}
            >
              <b>The Academy</b> bridges the gap between students and industry
              leaders through direct communication and creative collaboration.
              We offer effective career curation &amp; project funding outside
              the higher education system.
            </Typography>

            <Box
              sx={{
                mt: 5,
                pb: 5,
                '& button': {
                  mr: 3,
                  fontSize: '30px',
                  lineHeight: 1,
                  borderBottom: '1px solid',
                  padding: '10px 0',
                  '&:hover': {
                    borderColor: '#4EA5B8',
                  },
                },
              }}
            >
              <Button>APPLY NOW</Button>
              <Button sx={{ borderBottom: '1px solid transparent' }}>
                LEARN MORE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
