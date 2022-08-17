import { Button, ButtonGroup, Dialog, DialogContent } from '@mui/material';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Raffle } from '../../../contexts';
import useApi from '../../../hooks/useApi';
import useRaffles from '../../../hooks/useRaffles';
import { MyProfile } from '../../MyProfile/MyProfile';
import { MyEntries } from './MyEntries/MyEntries';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const RaffleProfile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { myRaffles: raffles } = useRaffles();
  const wallet = useWallet();
  const [tabActive, setTabActive] = useState(1);
  const [myRaffles, setMyRaffles] = useState<Raffle[]>([]);
  const [myWins, setMyWins] = useState<Raffle[]>([]);
  const api = useApi();

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    aptSuite: '',
    city: '',
    zip: '',
    state: '',
    country: '',
    discordId: '',
    merchSize: '',
  });

  useEffect(() => {
    (async () => {
      const myRaffles = raffles.map((raffle: any) => raffle.raffle);
      setMyRaffles(myRaffles);
      setMyWins(
        raffles
          .filter((raffle: any) => raffle.isWon)
          .map((raffle: any) => raffle.raffle)
      );
    })();
  }, [raffles]);

  useEffect(() => {
    (async () => {
      if (!wallet.publicKey) return;
      const data = await api
        .get(`get_profile/${wallet.publicKey.toString()}`)
        .catch((e: any) => null);
      setData((d) => ({ ...d, discordId: data?.data?.discordId }));
    })();
  }, [wallet]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!wallet.publicKey) return;
    api
      .post('profile', {
        ...data,
        wallet_address: wallet.publicKey?.toString(),
      })
      .then((res: any) => {
        toast.success('Successfully Updated Profile!');
      })
      .catch((err: { message: any }) => toast.error(err.message));
  };
  // console.log('my raffles', myRaffles);
  // console.log('data', data);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          maxWidth: 'inherit',
          backgroundColor: '#4e4e4e4f',
          color: '#fff',
          backdropFilter: 'blur(25px)',
        },
      }}
    >
      <DialogContent>
        <ButtonGroup variant='outlined'>
          <Button
            variant={tabActive === 1 ? 'contained' : 'outlined'}
            onClick={() => setTabActive(1)}
          >
            My Profile
          </Button>
          <Button
            variant={tabActive === 2 ? 'contained' : 'outlined'}
            onClick={() => setTabActive(2)}
          >
            My Entries
          </Button>
        </ButtonGroup>

        {tabActive === 2 ? (
          <MyEntries myRaffles={myRaffles} MONTHS={MONTHS} />
        ) : tabActive === 1 ? (
          <MyProfile></MyProfile>
        ) : (
          ''
        )}
      </DialogContent>
    </Dialog>
  );
};
