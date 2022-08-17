import UploadIcon from '@mui/icons-material/Upload';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import { useWallet } from '@solana/wallet-adapter-react';

export const MyProfile = () => {
  const wallet = useWallet();
  return (
    <>
      {' '}
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          mb: 2,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            button: {
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
              cursor: 'unset',
              backgroundColor: 'transparent',
              fontFamily: 'Colfax !important',
              boxShadow: 'none',
              fontSize: '25px',
              '& img': {
                width: '32px',
                height: '32px',
              },
            },
          }}
        >
          <WalletMultiButton></WalletMultiButton>
        </Box>
      </Typography>
      <Box
        sx={{
          backgroundColor: '#0000003b',
          padding: '15px',
          borderRadius: '10px',
          borderColor: '#2d3748',
          minWidth: '895px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item lg={5}>
            <Box
              sx={{
                background: `url('/assets/user.jpeg')`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                height: '80px',
                width: '80px',
                borderRadius: '50%',
                marginLeft: '15px',
                margin: '0 auto',
              }}
            />
            {wallet.publicKey ? (
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '15px',
                  marginTop: '5px',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                Wallet Connected
              </Typography>
            ) : (
              ''
            )}

            <TextField
              id='filled-textarea'
              label='Bio'
              placeholder='Biography..'
              multiline
              rows={4}
              fullWidth
              variant='filled'
              sx={{
                color: '#fff',
                mt: 2,
                '& .MuiInputLabel-root': { color: '#fff' },
                '& .MuiFilledInput-root': {
                  backgroundColor: '#00000078 !important',
                  color: '#fff',
                  backdropFilter: 'blur(10px)',
                },
              }}
            />

            <Box
              sx={{
                display: 'flex',
                justify: 'center',
                alignItems: 'center',
                gap: 2,
                mt: 2,
              }}
            >
              <Button
                fullWidth
                variant='outlined'
                size='large'
                startIcon={<UploadIcon />}
              >
                Resume
              </Button>
              <Button fullWidth variant='outlined' size='large'>
                Claim 1{' '}
                <Box
                  component='img'
                  src='/assets/bail.png'
                  sx={{ maxWidth: '100%', width: '20px', marginLeft: '5px' }}
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
