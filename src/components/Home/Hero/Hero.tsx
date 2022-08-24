import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Navbar } from '../../Navbar/Navbar';
import { OfferLinks } from '../OfferLinks/OfferLinks';

export const Hero = () => {
  return (
    <Box
      sx={{
        background: `url('/assets/bg.png')`,
        backgroundColor: '#050505',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Navbar secondLogo={true} />
      <Container maxWidth='xl' sx={{ py: 6 }}>
        <Grid container>
          <Grid item lg={12}>
            <Typography
              variant='h1'
              sx={{
                fontWeight: 500,
                letterSpacing: '10px',
                lineHeight: 1,
                fontSize: '11rem',
                textAlign: 'left',
                mb: 5,
                mt: 8,
                textTransform: 'uppercase',
              }}
            >
              The Academy
            </Typography>

            <Typography
              sx={{
                fontFamily: 'inherit',
                color: '#fff',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '42px',
                maxWidth: '85%',
                lineHeight: 1.1,
                mt: 12,
                mb: 4,
              }}
            >
              An alternative method of career curation and project funding for
              the innovators of tomorrow.
            </Typography>

            <OfferLinks />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
