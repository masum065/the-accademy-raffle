import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RaffleProfile } from '../Raffles/MyProfile/RaffleProfile';

export const Navbar = ({ secondLogo }: { secondLogo?: Boolean }) => {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  return (
    <Box
      sx={{
        padding: '45px 0',
      }}
    >
      <Container maxWidth='xl'>
        <Grid container>
          <Grid lg={3}>
            <Box
              sx={{
                a: { display: 'flex', alignItems: 'center', gap: 2.2 },
                h2: {
                  fontWeight: '600',
                  m: 0,
                  fontSize: '34px',
                  letterSpacing: '2.3px',
                  opacity: 0.6,
                },
              }}
            >
              {secondLogo ? (
                <Link to='/'>
                  <Box
                    component='img'
                    sx={{ maxWidth: '160px' }}
                    src='/assets/mind-logo.png'
                    alt='logo'
                  />
                </Link>
              ) : (
                <Link to='/'>
                  <Box
                    component='img'
                    sx={{ maxWidth: '38px' }}
                    src='/assets/logo.png'
                    alt='logo'
                  />
                  <h2>THE ACADEMY</h2>
                </Link>
              )}
            </Box>
          </Grid>
          <Grid lg={9}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 3,
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  a: {
                    textTransform: 'uppercase',
                    fontSize: '18px',
                    letterSpacing: '1px',
                    borderBottom: '1.5px solid #fff',
                  },
                }}
              >
                <Link to='/'>Home</Link>
                <Link to='/events'>Events</Link>
              </Box>
              <Box
                onClick={() => setOpenProfileModal(!openProfileModal)}
                sx={{
                  cursor: 'pointer',
                  borderRadius: '50% !important',
                  border: '2px solid #fff',
                  color: '#fff !important',
                  '& svg': { height: '1.2em', width: '1.2em' },
                }}
              >
                <PersonOutlineIcon />
              </Box>

              <Box
                sx={{
                  button: {
                    backgroundColor: '#CF7B3E',
                    fontFamily: 'Colfax !important',
                  },
                }}
              >
                <WalletMultiButton></WalletMultiButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <RaffleProfile
        open={openProfileModal}
        onClose={() => setOpenProfileModal(false)}
      />
    </Box>
  );
};
