import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Button, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const EventCard = () => {
  const [saved, setSaved] = useState(false);
  return (
    <Box
      sx={{
        p: 1,
        boxShadow: '0px 0px 1px 2px #ffffff17',
        '&:hover .info': { bottom: 0 },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '20px',
          paddingBottom: '5px',
        }}
      >
        <Box>15 Aug 2022</Box>
        <Box>
          <Box component='b' sx={{ fontSize: '24px' }}>
            50
          </Box>{' '}
          Entered
        </Box>
      </Box>
      <Box
        sx={{
          background: `url( '/assets/events/event-1.jpg')`,
          width: '100%',
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          position: 'relative',
        }}
      >
        <Box
          className='info'
          sx={{
            position: 'absolute',
            bottom: '-100%',
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignitems: 'center',
            zIndex: 99,
            backdropFilter: 'blur(7px)',
            background: '#0000009c',
            p: 1.2,
            transition: '.6s',
          }}
        >
          <IconButton
            aria-label='save'
            size='large'
            sx={{
              border: '2px solid',
              borderRadius: '50% !important',
              transform: 'scale(.8)',
            }}
            onClick={() => setSaved(!saved)}
          >
            {saved ? (
              <FavoriteIcon fontSize='inherit' />
            ) : (
              <FavoriteBorderIcon fontSize='inherit' />
            )}
          </IconButton>

          <Button
            component={Link}
            to='/event-details'
            variant='outlined'
            sx={{
              border: '2px solid #fff',
              fontWeight: 'bold',
              fontSize: '18px',
              minWidth: '50%',
              transform: 'scale(.8)',
            }}
          >
            More Info
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
