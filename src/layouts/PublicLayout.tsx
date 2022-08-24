import { Box } from '@mui/material';
import { Footer } from '../components/Footer/Footer';
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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

      <Footer />
    </Box>
  );
};
