import { Box, Typography } from '@mui/material';

export const CustomMessage = ({
  message,
  marketPlaceLink,
}: {
  message: string;
  marketPlaceLink?: string;
}) => {
  return (
    <Box
      sx={{
        height: '50vh',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontWeight: '300', fontSize: '30px' }}>
        {message}{' '}
        {marketPlaceLink ? (
          <Box
            component='a'
            sx={{
              color: '#10B981',
              textDecoration: 'none',
              padding: '2px 8px',
              border: '3px solid',
              borderRadius: '8px',
              fontSize: '75%',
              lineHeight: '0',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              background: '#10b98121',
              transition: 'all linear .3s',
              '&:hover': {
                background: 'none',
              },
            }}
            href='https://magiceden.io/'
            target='_blank'
          >
            Here
          </Box>
        ) : (
          ''
        )}
      </Typography>
    </Box>
  );
};
