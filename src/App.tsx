import { ThemeProvider } from '@mui/material';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  MathWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AppOrig from './App';
import './assets/fonts/MonumentExtended/monument.css';
import './assets/fonts/pixeboy/pixeboy.css';
import { MyProfile } from './components/MyProfile/MyProfile';
import { EventDetails } from './components/Profile/EventDetails/EventDetails';
import { Profile } from './components/Profile/Profile';
import RaffleDetailsPage from './components/Raffles/Details/Details';
import { Raffles } from './components/Raffles/Raffles';
import { RPC_CONFIG } from './config';
import RafflesProvider from './contexts/Providers';
import Auctions from './pages/auctions';
import { theme } from './theme';

const App = () => {
  const forceEndpoint = 'https://rpc.solpatrol.io';
  const endpoint = useMemo(
    () => forceEndpoint || RPC_CONFIG.uri || clusterApiUrl(RPC_CONFIG.network),
    []
  );

  const connection = useMemo(() => new Connection(endpoint), [endpoint]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletWalletAdapter(),
      new MathWalletAdapter(),
      new SlopeWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <ThemeProvider theme={theme}>
        <WalletProvider wallets={wallets} onError={() => {}} autoConnect>
          <WalletDialogProvider>
            <RafflesProvider connection={connection}>
              <BrowserRouter>
                <Routes>
                  <Route path='/auctions' element={<Auctions />} />
                  <Route path='/' element={<Raffles />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/event-details' element={<EventDetails />} />
                  <Route path='/my-profile' element={<MyProfile />} />
                  <Route path='/wallet' element={<AppOrig />} />
                  <Route
                    path='/raffle-details/:key'
                    element={<RaffleDetailsPage />}
                  />
                </Routes>
              </BrowserRouter>
            </RafflesProvider>
          </WalletDialogProvider>
        </WalletProvider>
      </ThemeProvider>
    </ConnectionProvider>
  );
};

export default App;
