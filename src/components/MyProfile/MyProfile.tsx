import UploadIcon from '@mui/icons-material/Upload';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
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
        My Profile
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

            {/* <Grid item lg={4}> */}
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
                Claim Token
              </Button>
            </Box>
            {/* </Grid> */}
          </Grid>

          {/* <Grid item lg={4}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}
            >
              <Button
                fullWidth
                variant='outlined'
                size='large'
                startIcon={<UploadIcon />}
              >
                Upload a Resume
              </Button>
              <Button fullWidth variant='outlined' size='large'>
                Claim Free Token
              </Button>
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};
