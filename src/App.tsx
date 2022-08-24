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
import './assets/fonts/MonumentExtended/monument.css';
import './assets/fonts/pixeboy/pixeboy.css';
import { Home } from './components/Home/Home';
import { EventDetails } from './components/Profile/EventDetails/EventDetails';
import { Events } from './components/Profile/Events';
import { RPC_CONFIG } from './config';
import RafflesProvider from './contexts/Providers';
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
                  <Route
                    path='/event-details/:key'
                    element={<EventDetails />}
                  />
                  <Route path='/' element={<Home />} />
                  <Route path='/events' element={<Events />} />
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
