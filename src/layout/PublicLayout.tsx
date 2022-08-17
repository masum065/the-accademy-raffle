import { Box } from '@mui/material';
import { Navbar } from '../components/Navbar/Navbar';

export const PublicLayout = ({ children }: any) => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/assets/bg.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center top',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        '&::before': {
          position: 'absolute',
          opacity: 0.6,
          left: '0',
          top: '0',
          height: '100%',
          width: '100%',
          zIndex: -1,
          background: '#000',
          content: '""',
        },
      }}
    >
      <Navbar />

      <main className='main'>{children}</main>

      <Box sx={{ background: '#0000005c', py: 2, mt: 5, textAlign: 'center' }}>
        <Box>
          <a href='https://twitter.com/mindotacademy' target='_blank'>
            <Box
              sx={{ width: '50px', padding: '5px', background: '#000' }}
              component='img'
              src='/assets/twitter-2.png'
            ></Box>
          </a>
          <a href='https://discord.gg/Kx2uuxgq' target='_blank'>
            <Box
              component='img'
              sx={{ width: '50px !important' }}
              src='/assets/discord.jpg'
            ></Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};
