import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Raffle } from '../../contexts';
import useRaffles from '../../hooks/useRaffles';
import { PublicLayout } from '../../layouts/PublicLayout';
import { RaffleCard } from './Card/Card';
import { CustomMessage } from './CustomMessage/CustomMessage';

export const Raffles = () => {
  const { raffles, loading } = useRaffles();
  const [activeTab, setActiveTab] = useState(1);
  const [opened, setOpened] = useState<Raffle[]>([]);
  const [closed, setClosed] = useState<Raffle[]>([]);

  useEffect(() => {
    if (raffles.length) {
      setOpened(raffles.filter((raffle) => !raffle.isClosed));
      setClosed(raffles.filter((raffle) => raffle.isClosed));
    }
  }, [raffles.length]);

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
        Events
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
                    Closed
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: activeTab === 1 ? 'block' : 'none' }}>
            <Grid container spacing={3}>
              {!opened.length && loading ? (
                [...Array(6)].map((s, i) => (
                  <Grid item lg={4} key={i}>
                    <Skeleton
                      sx={{
                        height: '400px',
                        transform: 'scale(1)',
                        width: '100%',
                        borderRadius: '0px',
                        background: 'rgb(24 21 18)',
                      }}
                      animation='wave'
                    />
                  </Grid>
                ))
              ) : opened.length ? (
                opened.map((raffle, index) => (
                  <Grid item md={6} lg={4} key={index}>
                    <RaffleCard raffle={raffle} />
                  </Grid>
                ))
              ) : (
                <CustomMessage message='No Events Found' />
              )}
            </Grid>
          </Box>
          <Box sx={{ display: activeTab === 2 ? 'block' : 'none' }}>
            <Grid container spacing={3}>
              {!closed.length && loading ? (
                [...Array(6)].map((s, i) => (
                  <Grid item lg={4} key={i}>
                    <Skeleton
                      sx={{
                        height: '400px',
                        transform: 'scale(1)',
                        width: '100%',
                        borderRadius: '0px',
                        background: 'rgb(24 21 18)',
                      }}
                      animation='wave'
                    />
                  </Grid>
                ))
              ) : closed.length ? (
                closed.map((raffle, index) => (
                  <Grid item md={6} lg={4} key={index}>
                    <RaffleCard raffle={raffle} />
                  </Grid>
                ))
              ) : (
                <CustomMessage message='No Events Found' />
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </PublicLayout>
  );
};
