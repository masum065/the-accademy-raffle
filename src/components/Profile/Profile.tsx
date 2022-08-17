import AttractionsIcon from '@mui/icons-material/Attractions';
import ClassIcon from '@mui/icons-material/Class';
import EventIcon from '@mui/icons-material/Event';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import numeral from 'numeral';
import { useEffect, useState } from 'react';
import { Raffle } from '../../contexts';
import useRaffles from '../../hooks/useRaffles';
import { PublicLayout } from '../../layout/PublicLayout';
import { RaffleCard } from '../Raffles/Card/Card';
import { CustomMessage } from '../Raffles/CustomMessage/CustomMessage';
import { RaffleProfile } from '../Raffles/MyProfile/RaffleProfile';

export const Profile = () => {
  const { publicKey, connected } = useWallet();
  const [bailBalance, setBailBalance] = useState(0);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const { raffles, loading } = useRaffles();
  const [activeTab, setActiveTab] = useState(1);
  const [opened, setOpened] = useState<Raffle[]>([]);
  const [closed, setClosed] = useState<Raffle[]>([]);

  useEffect(() => {
    if (raffles.length) {
      setOpened(raffles.filter((raffle) => !raffle.isClosed));
      setClosed(raffles.filter((raffle) => raffle.isClosed));
    }
  }, [raffles.length]);

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
          <Grid item lg={3} sx={{ mt: '100px' }}>
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
                <Button onClick={() => setOpenProfileModal(!openProfileModal)}>
                  My Profile
                </Button>
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
            <Box>
              <Container>
                <Grid container justifyContent='center'>
                  <Grid item lg={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center ',
                        mb: 5,
                      }}
                    >
                      <ButtonGroup
                        variant='contained'
                        aria-label='outlined primary button group'
                        size='large'
                        sx={{
                          button: {
                            fontSize: '25px',
                            p: 1,
                            fontFamily: 'chartert',
                          },
                          width: { lg: '400px', sm: '100%' },
                        }}
                      >
                        <Button
                          onClick={() => setActiveTab(1)}
                          variant={activeTab === 1 ? 'contained' : 'outlined'}
                          fullWidth
                        >
                          Open
                        </Button>
                        <Button
                          onClick={() => setActiveTab(2)}
                          variant={activeTab === 2 ? 'contained' : 'outlined'}
                          fullWidth
                        >
                          Closed
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ display: activeTab === 1 ? 'block' : 'none' }}>
                  <Grid container spacing={3}>
                    {!opened.length && loading ? (
                      [...Array(6)].map((s, i) => (
                        <Grid item lg={6} key={i}>
                          <Skeleton
                            sx={{
                              height: '600px',
                              transform: 'scale(1)',
                              width: '100%',
                              borderRadius: '0px',
                              background: 'rgb(24 21 18)',
                            }}
                            animation='wave'
                          />
                        </Grid>
                      ))
                    ) : opened.length ? (
                      opened.map((raffle, index) => (
                        <Grid item md={6} lg={6} key={index}>
                          <RaffleCard raffle={raffle} />
                        </Grid>
                      ))
                    ) : (
                      <CustomMessage message='No Events Found' />
                    )}
                  </Grid>
                </Box>
                <Box sx={{ display: activeTab === 2 ? 'block' : 'none' }}>
                  <Grid container spacing={3}>
                    {!closed.length && loading ? (
                      [...Array(6)].map((s, i) => (
                        <Grid item lg={6} key={i}>
                          <Skeleton
                            sx={{
                              height: '700px',
                              transform: 'scale(1)',
                              width: '100%',
                              borderRadius: '0px',
                              background: 'rgb(24 21 18)',
                            }}
                            animation='wave'
                          />
                        </Grid>
                      ))
                    ) : closed.length ? (
                      closed.map((raffle, index) => (
                        <Grid item md={6} lg={6} key={index}>
                          <RaffleCard raffle={raffle} />
                        </Grid>
                      ))
                    ) : (
                      <CustomMessage message='No Events Found' />
                    )}
                  </Grid>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <RaffleProfile
        open={openProfileModal}
        onClose={() => setOpenProfileModal(false)}
      />
    </PublicLayout>
  );
};
