import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Button, IconButton } from '@mui/material';
import { useState } from 'react';

export const EventCard = () => {
  const [saved, setSaved] = useState(false);
  return (
    <Box sx={{ p: 1, boxShadow: '0px 0px 1px 2px #ffffff17' }}>
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
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignitems: 'center',
            zIndex: 99,
            backdropFilter: 'blur(7px)',
            background: '#0000009c',
            p: 2,
            gap: 4,
          }}
        >
          <IconButton
            aria-label='save'
            size='large'
            sx={{ border: '2px solid', borderRadius: '50% !important' }}
            onClick={() => setSaved(!saved)}
          >
            {saved ? (
              <FavoriteIcon fontSize='inherit' />
            ) : (
              <FavoriteBorderIcon fontSize='inherit' />
            )}
          </IconButton>
          <Button
            variant='outlined'
            sx={{
              border: '2px solid #fff',
              fontWeight: 'bold',
              fontSize: '18px',
              minWidth: '50%',
            }}
          >
            More Info
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
