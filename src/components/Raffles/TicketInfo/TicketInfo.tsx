import { Grid, Skeleton } from '@mui/material';
import { Card } from './Card/Card';

export const TicketInfo = ({ raffle }: any) => {
  const infoData = [
    {
      title: 'Tickets Sold',
      count: raffle?.tickets || 0,
      icon: '/assets/ticket.png',
    },
    {
      title: '$Coin Collected',
      count: raffle?.tickets * raffle?.price || 0,
      icon: '/assets/fuji.png',
    },
    {
      title: 'Unique Wallets',
      count: raffle?.participants?.length || 0,
      icon: '/assets/wallet.png',
    },
  ];

  return (
    <Grid container spacing={4}>
      {raffle?.tickets || raffle?.tickets === 0
        ? infoData.map((info, index) => (
            <Grid item lg={4} key={info.title}>
              <Card info={info} />
            </Grid>
          ))
        : infoData.map((info) => (
            <Grid item key={info.title} lg={4}>
              <Skeleton
                sx={{
                  height: '84.61px',
                  transform: 'scale(1)',
                  width: '100%',
                }}
                animation='wave'
              />
            </Grid>
          ))}
    </Grid>
  );
};
