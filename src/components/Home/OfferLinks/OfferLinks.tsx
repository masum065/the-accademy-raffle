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
    label: 'PROJECT FUNDING',
    url: '#',
  },
  {
    label: 'PERSONAL DEVELOPMENT',
    url: '#',
  },
  {
    label: 'COMMUNITY',
    url: '#',
  },
];

export const OfferLinks = () => {
  return (
    <Container maxWidth='xl' sx={{ py: '100px' }}>
      <Grid container>
        <Grid item lg={7}>
          <Typography
            sx={{ fontSize: '44px', fontFamily: "'chartert' !important" }}
          >
            WHAT WE OFFER
          </Typography>

          <Box
            sx={{
              mt: 2,
              '& a': {
                '&:hover': {
                  color: '#4EA5B8 !important',
                },
                fontSize: '23px',
                marginRight: '40px',
                position: 'relative',
                '&::before': {
                  content: "''",
                  position: 'absolute',
                  top: '5px',
                  left: '-18px',
                  height: '7px',
                  width: '7px',
                  background: '#CF7B3E',
                  borderRadius: '50%',
                },
              },
            }}
          >
            {offerLinks.map((offer) => (
              <Box key={offer.label} component='a' href={offer.url}>
                {offer.label}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
