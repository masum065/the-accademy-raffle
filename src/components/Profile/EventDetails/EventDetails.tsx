import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useWalletDialog } from '@solana/wallet-adapter-material-ui';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useApi, { FILE_URL } from '../../../hooks/useApi';
import useRaffles from '../../../hooks/useRaffles';
import { PublicLayout } from '../../../layout/PublicLayout';
import { MONTHS } from '../../Raffles/MyProfile/RaffleProfile';

export const EventDetails = () => {
  const [saved, setSaved] = useState(false);
  const { key } = useParams();
  const { fetchRaffle, buyTickets, fetchMyEntry } = useRaffles();
  const wallet = useAnchorWallet();
  const walletDialog = useWalletDialog();
  const api = useApi();

  const [loading, setLoading] = useState<any>(true);
  const [raffleDetails, setRaffleDetails] = useState<any>(null);
  const [timeToLock, setTimeToLock] = useState('0d 0h 0m 0s');
  const [date, setDate] = useState(new Date());
  const [winners, setWinners] = useState<any[]>([]);
  const [raffle, setRaffle] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [myEntry, setMyEntry] = useState<any | undefined>();

  const fetchRaffleDetails = useCallback(async () => {
    if (!key) return;
    const data = await fetchRaffle(new PublicKey(key));
    if (!data) return;
    setRaffle(data);
    setWinners(data.participants.filter((part) => part.isWon));
    await api
      .get('rafflesDetails/' + key)
      .then((res) => setRaffleDetails(res.data))
      .catch(console.error);
    setLoading(false);
  }, [key, fetchRaffle]);

  useEffect(() => {
    fetchRaffleDetails();
  }, [fetchRaffleDetails]);
  useEffect(() => {
    console.log({ winners, myEntry, raffle, raffleDetails });
  }, [winners, myEntry, raffle, raffleDetails]);

  const fetchMyEntryDetails = useCallback(async () => {
    if (!key) return;
    const data = await fetchMyEntry(new PublicKey(key));
    if (!data) return;
    setMyEntry(data);
  }, [key, fetchMyEntry]);

  useEffect(() => {
    fetchMyEntryDetails();
  }, [fetchMyEntryDetails]);

  useEffect(() => {
    if (!raffle) return;
    const now = date;
    const limit = raffle?.isStarted ? raffle?.end : raffle?.start;
    let milliseconds = limit.getTime() - now.getTime();
    if (milliseconds < 0) {
      if (raffle.isStarted) {
        raffle.isClosed = true;
      } else {
        raffle.isStarted = true;
      }
    } else {
      let seconds = milliseconds / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60;
      let days = Math.floor(hours / 24);
      seconds = Math.floor(seconds % 60);
      minutes = Math.floor(minutes % 60);
      hours = Math.floor(hours % 24);
      setTimeToLock(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      if (raffle.isStarted) {
        raffle.isClosed = false;
      }
    }

    const interval = setInterval(() => {
      if (raffle) {
        setDate(new Date());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [raffle, date]);

  const buyTikets = async () => {
    if (!wallet?.publicKey) {
      console.log('Wallet not connected!');
      return walletDialog.setOpen(true);
    }

    // PROMPT FOR AMOUNT TO BUY
    const data = await api
      .get(`get_profile/${wallet?.publicKey.toString()}`)
      .catch((e) => null);

    // GETTING USER DISCORD ID
    const discordId = data?.data?.discordId;

    // CONDITIONAL CHECK FOR DISCORD ID
    if (raffle.raffleType !== 'NFT' && !discordId) {
      let id = prompt('Enter your discord id');
      if (id && id.length > 0) {
        // INSERTING ID INTO DB
        api
          .post('profile', {
            discordId: id,
            wallet_address: wallet?.publicKey?.toString(),
          })
          .then(async (res) => {
            toast.success('Successfully added your discord ID!');
          })
          .catch((err) => toast.error(err.message));
      }
    }

    await buyTickets(new PublicKey(key as any), quantity);
    fetchRaffleDetails();
  };

  const anchorWallet = useAnchorWallet();

  const isDisable = useMemo(
    () => (wallet?.publicKey ? false : true),
    [wallet?.publicKey]
  );

  if (!raffle)
    return (
      <Box
        sx={{
          fontSize: '40px',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: '100vh',
          fontWeight: 'bold',
          display: 'flex',
        }}
      >
        Loading...
      </Box>
    );

  return (
    <PublicLayout>
      <Container maxWidth='xl' sx={{ py: 4 }}>
        <Grid container spacing={5}>
          <Grid item lg={7}>
            <Box
              sx={{
                background: `url(${FILE_URL + raffle.image})`,
                width: '100%',
                height: '700px',
                backgroundSize: 'contain',
                backgroundPosition: 'center top',
                position: 'relative',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#ffffff',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '22px',
                    padding: '15px 25px',
                    color: '#fff',
                    background: '#000',
                    backdropFilter: 'blur(10px)',
                    fontFamily: "'chartert' !important",
                    ml: 2,
                  }}
                >
                  25 Spots
                </Box>
                <Box sx={{ p: 2 }}>
                  <IconButton
                    aria-label='save'
                    size='large'
                    sx={{
                      mr: 2,
                      background: '#00000091',
                      backdropFilter: 'blur(10px)',
                    }}
                    onClick={() => setSaved(!saved)}
                  >
                    {saved ? (
                      <FavoriteIcon fontSize='inherit' />
                    ) : (
                      <FavoriteBorderIcon fontSize='inherit' />
                    )}
                  </IconButton>

                  <IconButton
                    aria-label='save'
                    size='large'
                    sx={{
                      background: '#00000091',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <FileUploadIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                marginTop: 2.5,
              }}
            >
              <Box
                component='span'
                sx={{ fontWeight: 'bold', fontSize: '30px', mr: 2 }}
              >
                Times Remaining
              </Box>{' '}
              <WatchLaterIcon sx={{ fontSize: '30px' }} />
              <Box
                sx={{
                  fontSize: '25px',
                  lineHeight: 1,
                  fontWeight: 700,
                  display: 'flex',
                  gap: 1,
                  // letterSpacing: '3px',
                }}
              >
                {timeToLock.split(' ').map((part) => (
                  <Box
                    key={part}
                    sx={{
                      textAlign: 'center',
                      background: '#111827',
                      minWidth: '100px',
                      padding: '10px 1px',
                      borderRadius: '7px',
                      border: '1px solid #2d37488c',
                    }}
                  >
                    {part}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={5}>
            <Box>
              <Typography
                sx={{
                  padding: '10px 20px',
                  background: '#ffffff0f',
                  color: '#fff',
                  mb: 1,
                }}
              >
                {raffle.end.getDate()} {MONTHS[raffle.end.getMonth()]}{' '}
                {raffle.end.getFullYear()}
              </Typography>
              <Typography
                variant='h2'
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  display: 'inline-block',
                }}
              >
                {raffleDetails?.descriptionTitle || raffle?.name}
                <Box
                  sx={{
                    ml: 4,
                    display: 'inline-block',
                    img: { maxWidth: '30px', mx: 0.4 },
                  }}
                >
                  <Box
                    component='a'
                    href='http://www.twitter.com'
                    target='_blank'
                  >
                    <Box
                      component='img'
                      src='/assets/twitter-2.png'
                      sx={{ maxWidth: '30px !important' }}
                    />
                  </Box>
                  <Box
                    component='a'
                    href='https://magiceden.io/'
                    target='_blank'
                  >
                    <Box component='img' src='/assets/web.jpg' />
                  </Box>
                </Box>
              </Typography>

              <Typography>
                Hosted By <b>...</b>
              </Typography>
              <Button
                size='large'
                variant='outlined'
                sx={{ fontWeight: 'bold', mt: 2, mb: 4 }}
              >
                Follow
              </Button>
              {raffleDetails?.description && (
                <Typography sx={{ opacity: 0.6 }}>
                  {raffleDetails?.description}
                </Typography>
              )}

              <Box
                sx={{
                  mt: 5,
                  display: 'flex',
                  gap: 2,
                  maxWidth: '70%',
                  flexDirection: 'column',
                  '& button': { fontWeight: 'bold', fontSize: '25px' },
                }}
              >
                <Button
                  onClick={buyTikets}
                  variant='contained'
                  size='large'
                  sx={{ textTransform: 'inherit !important' }}
                >
                  JOIN TICKET 1 (mDOT)
                </Button>
                <Button variant='outlined' size='large'>
                  Raffle $50
                </Button>
                <Button variant='contained' size='large'>
                  Vote Spoat (3Per)
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ mt: 5 }}>
          <Grid item lg={7}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '27px',
                mb: 4,
                textTransform: 'uppercase',
                borderBottom: '1px solid #333',
                paddingBottom: '10px',
              }}
              variant='h3'
            >
              {' '}
              About This Event
            </Typography>
            <Typography sx={{ opacity: 0.7 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea
              dolores id, asperiores quos adipisci eaque blanditiis atque
              voluptates quisquam delectus doloribus quas incidunt perferendis
              dignissimos omnis quia maxime commodi iste fuga eum quaerat nihil
              pariatur! Quae illum neque vel quidem nemo nihil optio rerum
              magnam vitae. <br /> <br /> Tempore quidem quasi totam eaque ab
              aspernatur modi corporis voluptatibus quas quae. Laudantium vitae
              nesciunt voluptates numquam delectus animi repellendus?
              Repudiandae omnis laborum soluta alias tempore dolor nulla ex,
              voluptate sed doloremque eum ratione eaque vitae et aliquam fuga
              obcaecati quas facilis? Quisquam incidunt officia aspernatur
              labore quis, totam velit maxime temporibus maiores!
            </Typography>

            {/* <Box
              component='img'
              src='/assets/events/event-2.jpg'
              sx={{
                width: '100%',
              }}
            /> */}
            {raffle.participants && (
              <Box
                sx={{
                  mt: 3,
                  border: '1px solid rgb(255 255 255 / 29%)',
                  backgroundColor: 'rgb(0 0 0 / 56%)',
                  p: 4,
                  borderRadius: '0px',
                  opacity: 0.7,
                }}
              >
                <Typography
                  component='h3'
                  sx={{
                    fontSize: '32px',
                    borderBottom: '2px solid',
                    marginBottom: '10px',
                  }}
                >
                  All PARTICPANTS
                </Typography>
                {raffle?.participants?.map(
                  (
                    val: {
                      owner: any | string;
                      tickets: {} | null | undefined;
                    },
                    index: any
                  ) => {
                    return (
                      <Box sx={{ my: 2 }}>
                        <Grid container>
                          <Grid item lg={8} md={5} xs={6}>
                            <h5>wallet</h5>
                            {val.owner.toString()}
                          </Grid>
                          <Grid item lg={2} md={5} xs={6}>
                            <h5>Tickets</h5> {val.tickets}
                          </Grid>
                          <Grid item lg={2} md={5} xs={6}>
                            <h5>total</h5>
                            {Number(val.tickets) * raffle.price}
                          </Grid>
                        </Grid>
                      </Box>
                    );
                  }
                )}
              </Box>
            )}
          </Grid>

          <Grid item lg={5}>
            <Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '25px',
                  mb: 4,
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #333',
                  paddingBottom: '10px',
                }}
                variant='h3'
              >
                {' '}
                Schedule
              </Typography>

              <Box>
                <Box sx={{ display: 'flex', gap: 1, opacity: 0.6 }}>
                  <AccessTimeIcon />
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Time &amp; Date
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  Tue, October 4, 2022 10:00 AM <br />
                  Sat, October 8, 2022 8:00 PM
                </Typography>
              </Box>

              <Button
                sx={{ fontWeight: 'bold', mt: 1, mb: 3 }}
                variant='outlined'
                size='large'
                startIcon={<CalendarMonthIcon />}
              >
                Add Callender
              </Button>
              <Box>
                <Box sx={{ display: 'flex', gap: 1, opacity: 0.6 }}>
                  {' '}
                  <LocationOnIcon />{' '}
                  <Typography sx={{ fontWeight: 'bold' }}>Location</Typography>
                </Box>{' '}
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  Event Center Hall 74 Sergio <br />
                  Arbolenda University, CI. 74 #14 - 25,
                  <br />
                  Bogota, Colombia.
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  mt: 6,
                  fontWeight: 'bold',
                  fontSize: '25px',
                  mb: 4,
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #333',
                  paddingBottom: '10px',
                }}
                variant='h3'
              >
                Voting in
              </Typography>

              <Box sx={{ maxWidth: '50%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                    Sambo
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                    30 Votes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                    Kim
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                    23 Votes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                    Blake
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                    12 Votes
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PublicLayout>
  );
};
