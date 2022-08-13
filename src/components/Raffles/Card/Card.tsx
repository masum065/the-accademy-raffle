import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Raffle } from '../../../contexts';
import { FILE_URL } from '../../../hooks/useApi';

export const RaffleCard = ({ raffle }: { raffle: Raffle }) => {
  const [timeToLock, setTimeToLock] = useState('0d 0h 0m');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const end_date = raffle?.end;
    const now = date;
    let milliseconds = end_date.getTime() - now.getTime();
    if (milliseconds < 0) {
      raffle.isClosed = true;
    } else {
      let seconds = milliseconds / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60;
      let days = Math.floor(hours / 24);
      seconds = Math.floor(seconds % 60);
      minutes = Math.floor(minutes % 60);
      hours = Math.floor(hours % 24);
      setTimeToLock(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      raffle.isClosed = false;
    }
    const interval = setInterval(() => {
      if (raffle) {
        setDate(new Date());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <Box
      sx={{
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '0px',
        border: '1px solid rgb(255 255 255 / 29%)',
        backgroundColor: 'rgb(0 0 0 / 56%)',
      }}
    >
      <Box>
        <Link to={`./raffle-details/${raffle?.key.toString()}`}>
          <Box
            component='img'
            sx={{ maxWidth: '100%', p: 1.3, borderRadius: '0' }}
            src={FILE_URL + raffle.image}
          />
        </Link>
        {/* <div>{!raffle.isClosed ? timeToLock : ''}</div> */}
      </Box>
      <Box
        sx={{
          px: 2,
          pt: 3,
          pb: 2,
          minHeight: '225px',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Link to={`./raffle-details/${raffle?.key.toString()}`}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '28px',
              lineHeight: 1,
              mb: 1,
              fontFamily: 'chartert',
              fontWeight: 'bold',
            }}
          >
            {raffle.name}
          </Typography>
        </Link>
        <Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <b>{raffle.tickets}</b> Sold
              </Box>
              <Box>
                <b>{raffle.winners}</b> winners
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 1, mb: 2 }}>
              {/* <p>{!raffle.isClosed ? 'Raffle Open' : ' Raffle Closed!'}</p> */}

              {!raffle.isClosed ? (
                <Typography>
                  Ends in:{' '}
                  <Box sx={{ marginLeft: 1 }} component='b'>
                    {timeToLock}
                  </Box>
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'red',
                    background: '#ff000021',
                    padding: '5px',
                  }}
                >
                  Raffle Is Closed!
                </Typography>
              )}
            </Box>
          </Box>
          <Link to={`./raffle-details/${raffle?.key.toString()}`}>
            <Button
              variant='contained'
              fullWidth
              sx={{
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '2px',
              }}
            >
              {!raffle.isClosed ? 'Join Raffle' : 'View Winners'}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
