import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Raffle } from '../../contexts';
import useRaffles from '../../hooks/useRaffles';
import { PublicLayout } from '../../layout/PublicLayout';
import { RaffleCard } from './Card/Card';

export const Raffles = () => {
  const { raffles } = useRaffles();
  const [activeTab, setActiveTab] = useState(1);
  const [opened, setOpened] = useState<Raffle[]>([]);
  const [closed, setClosed] = useState<Raffle[]>([]);

  useEffect(() => {
    if (raffles.length) {
      setOpened(raffles.filter((raffle) => !raffle.isClosed));
      setClosed(raffles.filter((raffle) => raffle.isClosed));
    }
  }, [raffles.length]);

  console.log(raffles, opened, closed);

  return (
    <PublicLayout>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '50px',
          pt: 4,
          pb: 5,
          fontFamily: 'chartert',
          fontWeight: 'bold',
          letterSpacing: ' 2px',
          textTransform: 'uppercase',
        }}
      >
        Raffles
      </Typography>

      <Box>
        <Container>
          <Grid container justifyContent='center'>
            <Grid item lg={12}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center ',
                  mb: 5,
                }}
              >
                <ButtonGroup
                  variant='contained'
                  aria-label='outlined primary button group'
                  size='large'
                  sx={{
                    button: {
                      fontSize: '25px',
                      p: 1,
                      fontFamily: 'chartert',
                    },
                    width: { lg: '400px', sm: '100%' },
                  }}
                >
                  <Button
                    onClick={() => setActiveTab(1)}
                    variant={activeTab === 1 ? 'contained' : 'outlined'}
                    fullWidth
                  >
                    Open
                  </Button>
                  <Button
                    onClick={() => setActiveTab(2)}
                    variant={activeTab === 2 ? 'contained' : 'outlined'}
                    fullWidth
                  >
                    Complete
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: activeTab === 1 ? 'block' : 'none' }}>
            <Grid container spacing={3}>
              {opened.map((raffle, index) => (
                <Grid item md={6} lg={4} key={index}>
                  <RaffleCard raffle={raffle} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: activeTab === 2 ? 'block' : 'none' }}>
            <Grid container spacing={3}>
              {closed.map((raffle, index) => (
                <Grid item md={6} lg={4} key={index}>
                  <RaffleCard raffle={raffle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </PublicLayout>
  );
};
