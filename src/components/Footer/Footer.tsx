import { Box } from '@mui/system';

export const Footer = () => {
  return (
    <Box sx={{ background: '#000', py: 2, mt: 5, textAlign: 'center' }}>
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
  );
};
