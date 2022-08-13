import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export const CANDY_MACHINE_ACCOUNT = process.env.CANDY_MACHINE_ID!;

export const RPC_CONFIG: { uri: string; network: WalletAdapterNetwork } = {
  uri: process.env.RPC_URI!,
  network: process.env.SOLANA_NETWORK as WalletAdapterNetwork,
};
