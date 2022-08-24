import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useWalletDialog } from '@solana/wallet-adapter-material-ui';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
// import { ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useApi, { FILE_URL } from '../../../hooks/useApi';
import useRaffles from '../../../hooks/useRaffles';
import { PublicLayout } from '../../../layouts/PublicLayout';
import { TicketInfo } from '../TicketInfo/TicketInfo';

const RaffleDetailsPage = () => {
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
  console.log('participants', raffle);
  return (
    <PublicLayout>
      <Box sx={{ py: 10 }}>
        <Container>
          <Grid container sx={{ mb: 5 }}>
            <Grid item xs={12} lg={12}>
              <TicketInfo raffle={raffle} />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item lg={6}>
              <Box
                component='img'
                sx={{ maxWidth: '100%', borderRadius: '0px' }}
                src={FILE_URL + raffle.image}
                alt='raffle'
              />
            </Grid>
            <Grid item lg={6}>
              <Typography
                component='h3'
                sx={{
                  fontSize: '50px',
                  fontWeight: 'bold',
                  lineHeight: '1',
                  marginBottom: '20px',
                }}
              >
                {raffleDetails?.descriptionTitle || raffle?.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 5, mb: 2 }}>
                {!!raffle.isClosed ? (
                  <Typography
                    component='h3'
                    sx={{
                      fontSize: '30px',
                      fontWeight: 'bold',
                      display: 'none',
                    }}
                  >
                    Closed
                  </Typography>
                ) : (
                  <Box
                    sx={{
                      border: '1px solid #fff',
                      borderRadius: '0px',
                      padding: '8px 13px',
                      span: {
                        fontSize: '22px',
                        fontWeight: 700,
                        display: 'block',
                        lineHeight: 1,
                      },
                    }}
                  >
                    Tickets Price
                    <span>{raffle.price}</span>
                  </Box>
                )}
              </Box>
              {raffleDetails?.description && (
                <p>{raffleDetails?.description}</p>
              )}

              {!raffle.isClosed ? (
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
                        background: '#201c37',
                        minWidth: '67px',
                        padding: '10px 1px',
                        borderRadius: '0px',
                        textAlign: 'center',
                      }}
                    >
                      {part}
                    </Box>
                  ))}
                </Box>
              ) : (
                <Typography
                  component='h3'
                  color='error'
                  sx={{ fontSize: '40px', fontWeight: 'bold' }}
                >
                  Closed
                </Typography>
              )}
              {!raffle.isClosed && (
                <div className='buy-ticket'>
                  {!(
                    (raffle.maxTickets > 0 &&
                      myEntry?.tickets === raffle.maxTickets) ||
                    (raffle.maxTicketsPerPerson > 0 &&
                      myEntry?.tickets === raffle.maxTicketsPerPerson)
                  ) ? (
                    raffle.isStarted && (
                      <>
                        <ButtonGroup
                          variant='contained'
                          aria-label='contained button group'
                          sx={{
                            marginTop: 3,
                            textAlign: 'center',

                            svg: { color: '#fff' },
                            button: {
                              fontSize: '40px',
                              lineHeight: 1,
                              minWidth: '65px !important',
                            },
                            input: {
                              textAlign: 'center',
                              fontSize: '40px',
                              maxWidth: '90px',
                              fontWeight: 'bold',
                            },
                          }}
                        >
                          <Button
                            onClick={() => {
                              if (quantity > 1) setQuantity(quantity - 1);
                            }}
                          >
                            -
                          </Button>
                          <input
                            disabled={isDisable}
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(
                                Math.min(
                                  parseInt(e.target.value),
                                  raffle.maxTicketsPerPerson -
                                    (myEntry?.tickets || 0)
                                )
                              )
                            }
                          />

                          <Button
                            onClick={() =>
                              setQuantity(
                                Math.min(
                                  quantity + 1,
                                  raffle.maxTicketsPerPerson -
                                    (myEntry?.tickets || 0)
                                )
                              )
                            }
                          >
                            +
                          </Button>
                        </ButtonGroup>
                        <div className='mt-3'>
                          <Button
                            variant='outlined'
                            onClick={buyTikets}
                            sx={{
                              fontFamily: "'Space Mono', monospace",
                              textTransform: 'capitalize !important',
                              fontWeight: 'bold',
                              fontSize: '27px',
                              py: '5px',
                            }}
                          >
                            {!wallet?.publicKey
                              ? 'Connect Wallet'
                              : 'Buy Tickets'}
                          </Button>
                        </div>
                      </>
                    )
                  ) : (
                    <Typography color='error' sx={{ fontsize: '22px' }}>
                      Your buying limit has been Reached
                    </Typography>
                  )}
                </div>
              )}

              {!!raffle.isClosed && (
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5 }}>
                  <Typography component='h3' sx={{ fontSize: '25px' }}>
                    Winning Wallets
                  </Typography>

                  {winners?.map((w, i) => (
                    <Typography sx={{ mt: 1 }} key={i}>
                      {w.owner.toString()}
                    </Typography>
                  ))}
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Box>
            {!!winners.length && (
              <Box
                sx={{
                  mt: 5,
                  border: '1px solid rgb(255 255 255 / 29%)',
                  backgroundColor: 'rgb(0 0 0 / 56%)',
                  p: 4,
                  borderRadius: '0px',
                }}
              >
                <Typography
                  component='h3'
                  sx={{
                    fontSize: '42px',
                    borderBottom: '2px solid',
                    marginBottom: '30px',
                  }}
                >
                  {' '}
                  Winners
                </Typography>
                {winners.map((val, index) => {
                  return (
                    <Grid container>
                      <Grid item lg={6} md={5} xs={6}>
                        <h5>wallet</h5>
                        {val.owner.toString()}
                      </Grid>
                      <Grid item lg={2} md={5} xs={6}>
                        <h5>Tickets</h5> {val.tickets}
                      </Grid>
                      <Grid item lg={2} md={5} xs={6}>
                        <h5>total</h5>
                        {val.tickets * raffle.price}
                      </Grid>
                      <Grid item lg={2} md={5} xs={6}>
                        <h5>Purchased</h5>
                        ---
                      </Grid>
                    </Grid>
                  );
                })}
              </Box>
            )}

            {raffle.participants && (
              <Box
                sx={{
                  mt: 5,
                  border: '1px solid rgb(255 255 255 / 29%)',
                  backgroundColor: 'rgb(0 0 0 / 56%)',
                  p: 4,
                  borderRadius: '0px',
                }}
              >
                <Typography
                  component='h3'
                  sx={{
                    fontSize: '42px',
                    borderBottom: '2px solid',
                    marginBottom: '30px',
                  }}
                >
                  All Entries ({raffle.participants.length})
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
                          <Grid item lg={6} md={5} xs={6}>
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
                          <Grid item lg={2} md={5} xs={6}>
                            <h5>Purchased</h5>
                            ---
                          </Grid>
                        </Grid>
                      </Box>
                    );
                  }
                )}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </PublicLayout>
  );
};

export default RaffleDetailsPage;
