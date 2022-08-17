import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box
      sx={{
        padding: '30px 0',
      }}
    >
      <Container maxWidth='xl'>
        <Grid container>
          <Grid lg={3}>
            <Box
              sx={{
                img: { maxWidth: '50px' },
                a: { display: 'flex', alignItems: 'center', gap: 2.2 },
                h2: {
                  fontWeight: '600',
                  m: 0,
                  fontSize: '34px',
                  letterSpacing: '2.3px',
                },
              }}
            >
              <Link to='/'>
                <img src='/assets/logo.png' alt='logo' />
                <h2>THE ACADEMY</h2>
              </Link>
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
                {/* {navItems.map((nav) => ( */}

                <Link to='/'>Home</Link>
                <Link to='/raffles'>Demo</Link>
              </Box>
              <Box
                component={Link}
                to='/profile'
                sx={{
                  borderRadius: '50%',
                  border: '2px solid #fff',
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
    </Box>
  );
};
