import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import { Raffle } from '../../../../contexts';

export const MyEntries = ({
  myRaffles,
  MONTHS,
}: {
  myRaffles: Raffle[];
  MONTHS: string[];
}) => {
  const wallet = useWallet();
  return (
    <>
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          mb: 2,
          textAlign: 'center',
        }}
      >
        My Events
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
        {myRaffles.length ? (
          <Table
            sx={{
              borderRadius: '10px',
              overflow: 'hidden',
              '& td': {
                color: '#fff !important',
                borderBottom: '1px solid rgb(224 224 224 / 18%) !important',
              },
              '& .MuiTableCell-root': {
                color: '#fff !important',
                borderBottom: '1px solid rgb(224 224 224 / 18%) !important',
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Total Tickets</TableCell>
                <TableCell>My Tickets</TableCell>
                <TableCell>$mDOT Spent</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myRaffles.map((raffle, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:last-child td': {
                      border: 0,
                    },
                  }}
                >
                  <TableCell>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        sx={{ fontSize: '20px', fontWeight: 'bold' }}
                        variant='body2'
                      >
                        {raffle.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{raffle.tickets}</TableCell>
                  <TableCell>
                    {
                      raffle.participants.find(
                        (p) =>
                          p.owner.toString() == wallet.publicKey?.toString()
                      )?.tickets
                    }
                  </TableCell>
                  <TableCell>
                    {/* @ts-ignore */}
                    {raffle.participants?.find(
                      (p) => p.owner.toString() == wallet?.publicKey?.toString()
                    )?.tickets * raffle.price}
                  </TableCell>
                  <TableCell> {raffle.isClosed ? 'Closed' : 'Open'}</TableCell>
                  <TableCell>
                    {' '}
                    {raffle.end.getDate()} / {MONTHS[raffle.end.getMonth()]} /{' '}
                    {raffle.end.getFullYear()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography
            sx={{
              textAlign: 'center',
              minHeight: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '500',
              fontSize: '20px',
            }}
          >
            No event entries found!
          </Typography>
        )}
      </Box>
    </>
  );
};
