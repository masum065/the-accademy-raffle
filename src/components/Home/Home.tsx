import { Box } from '@mui/material';
import { Footer } from '../Footer/Footer';
import { Career } from './Career/Career';
import { Hero } from './Hero/Hero';

export const Home = () => {
  return (
    <Box sx={{ background: '#fff', color: '#000' }}>
      <Hero />
      <Career />
      <Footer />
    </Box>
  );
};
