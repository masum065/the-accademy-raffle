import { Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

const offerLinks = [
  {
    label: 'CAREER CURATION',
    url: '#',
  },
  {
    label: 'FINANCIALLY REWARDED EFFORT',
    url: '#',
  },
  {
    label: 'MEMBER-GOVERNED ORGANIZATION  STRUCTURE',
    url: '#',
  },
  {
    label: 'EXCLUSIVE NETWORKING',
    url: '#',
  },
  {
    label: 'COMMUNITY',
    url: '#',
  },
];

export const OfferLinks = () => {
  return (
    <Container maxWidth='xl' sx={{ py: 5 }}>
      <Grid container spacing={4}>
        <Grid item lg={2}>
          <Typography
            sx={{
              fontSize: '45px',
              fontFamily: "'chartert' !important",
              color: '#CF7B3E',
              fontWeight: 600,
            }}
          >
            WHAT WE OFFER
          </Typography>
        </Grid>
        <Grid item lg={10}>
          <Box
            sx={{
              mt: '5px',
              '& a': {
                '&:hover': {
                  color: '#4EA5B8 !important',
                },
                fontSize: '31px',
                marginRight: '20px',
              },
            }}
          >
            {offerLinks.map((offer) => (
              <Box key={offer.label} component='a' href={offer.url}>
                <Box
                  component='img'
                  src='/assets/arrow-up.png'
                  sx={{ maxWidth: '25px' }}
                />{' '}
                {offer.label}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
