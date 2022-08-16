import AttractionsIcon from '@mui/icons-material/Attractions';
import ClassIcon from '@mui/icons-material/Class';
import EventIcon from '@mui/icons-material/Event';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { PublicLayout } from '../../layout/PublicLayout';
import { EventCard } from './Event/EventCard';

export const Profile = () => {
  const { publicKey, connected } = useWallet();
  const [bailBalance, setBailBalance] = useState(0);

  const getTokenBalanceAndPrice = async () => {
    try {
      const resp = await fetch(
        `https://api.solscan.io/account/tokens?address=${publicKey?.toString()}&price=1`
      );
      const data = await resp.json();

      const bailInfo = data.data.find((item: any) => {
        return (
          item.tokenAccount === 'FjFEhpT5LRVTKQ5uC3SXAu7PBSoyLsqewL8vsauH8bXp'
        );
      });

      if (bailInfo) {
        setBailBalance(bailInfo.tokenAmount.uiAmount);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (connected) {
      getTokenBalanceAndPrice();
    }
  }, [connected, getTokenBalanceAndPrice]);
  return (
    <PublicLayout>
      <Container maxWidth='xl'>
        <Grid container spacing={3} sx={{ py: 3 }}>
          <Grid item lg={3}>
            <Box
              sx={{
                background: '#000',
                padding: '20px',
                boxShadow: '0px 0px 1px 2px #ffffff17',
              }}
            >
              <Box>
                {connected && (
                  <Box
                    sx={{
                      display: 'flex',
                      justify: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      className='spinningasset coin'
                      sx={{
                        height: '60px',
                        maxWidth: '75px',
                        transform: 'scale(.6)',
                      }}
                    >
                      <Box>
                        <Box />
                        {[...Array(11)].map((v, i) => (
                          <Box key={i} component='i' />
                        ))}
                        <Box component='em' />
                        <Box component='em' />
                        <Box />
                      </Box>
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#a87754', mb: '-10px' }}>
                        Coin Balance
                      </Typography>
                      <Typography sx={{ fontSize: '2.2rem', fontWeight: 700 }}>
                        {numeral(bailBalance).format('0,0')}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>

              <Box
                sx={{
                  mt: 3,
                  '& button': {
                    display: 'block',
                    padding: '10px 20px 10px 30px',
                    position: 'relative',

                    '&::before': {
                      position: 'absolute',
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      height: '40%',
                      width: '5px',
                      content: "''",
                      background: '#a37034',
                    },
                  },
                }}
              >
                <Button>My Profile</Button>
                <Button>Saved Items</Button>
              </Box>
            </Box>

            {/* Tab Part */}
            <Box
              sx={{
                mt: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: 'column',
                '& button': {
                  fontWeight: 'bold !important',
                  fontSize: '18px ',
                },
              }}
            >
              <Button startIcon={<EventIcon />}>Live Events</Button>
              <Button startIcon={<TextSnippetIcon />}>
                Interview Sessions
              </Button>
              <Button startIcon={<StorefrontIcon />}>Merch</Button>
              <Button startIcon={<AttractionsIcon />}>
                Mentorship Sessions
              </Button>
              <Button startIcon={<ClassIcon />}>Classes</Button>
            </Box>
          </Grid>
          <Grid item lg={9}>
            <Grid container spacing={4}>
              {[...Array(6)].map((s, i) => (
                <Grid item key={i} lg={6}>
                  <EventCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </PublicLayout>
  );
};
