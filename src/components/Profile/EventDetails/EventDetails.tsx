import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { PublicLayout } from '../../../layout/PublicLayout';

export const EventDetails = () => {
  const [saved, setSaved] = useState(false);
  const [timeToLock, setTimeToLock] = useState('0d 0h 0m 0s');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const end_date = new Date('Tue Oct 4 2022 00:45:17');
    const now = date;
    let milliseconds = end_date.getTime() - now.getTime();
    if (milliseconds < 0) {
    } else {
      let seconds = milliseconds / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60;
      let days = Math.floor(hours / 24);
      seconds = Math.floor(seconds % 60);
      minutes = Math.floor(minutes % 60);
      hours = Math.floor(hours % 24);
      setTimeToLock(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);
  return (
    <PublicLayout>
      <Container maxWidth='xl' sx={{ py: 4 }}>
        <Grid container spacing={5}>
          <Grid item lg={7}>
            <Box
              sx={{
                background: `url( '/assets/events/event-1.jpg')`,
                width: '100%',
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                position: 'relative',
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
                15 Aug 2022
              </Typography>
              <Typography
                variant='h2'
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  display: 'inline-block',
                }}
              >
                Netflix Headquarters Tour
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
                Hosted By <b>Netflix &amp; mind.t core</b>
              </Typography>
              <Button
                size='large'
                variant='outlined'
                sx={{ fontWeight: 'bold', mt: 2, mb: 4 }}
              >
                Follow
              </Button>

              <Typography sx={{ opacity: 0.6 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                ducimus vero, error fuga eius illo adipisci facilis? Obcaecati,
                ducimus exercitationem?
              </Typography>

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
                <Button variant='contained' size='large'>
                  Buy Ticket $100
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
            <br /> <br />
            <Box
              component='img'
              src='/assets/events/event-2.jpg'
              sx={{
                width: '100%',
              }}
            />
            <Typography sx={{ opacity: 0.7 }}>
              <br /> <br /> Tempore quidem quasi totam eaque ab aspernatur modi
              corporis voluptatibus quas quae. Laudantium vitae nesciunt
              voluptates numquam delectus animi repellendus? Repudiandae omnis
              laborum soluta alias tempore dolor nulla ex, voluptate sed
              doloremque eum ratione eaque vitae et aliquam fuga obcaecati quas
              facilis? Quisquam incidunt officia aspernatur labore quis, totam
              velit maxime temporibus maiores!
            </Typography>
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
