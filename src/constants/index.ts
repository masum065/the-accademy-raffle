import { MetadataJson } from '@metaplex/js';
import * as anchor from '@project-serum/anchor';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

const MAINNET = true;

export type StaticMetadata = {
  metadata: {
    name: string;
    symbol: string;
    uri: string;
    seller_fee_basis_points: number;
    creators: {
      address: string;
      share: number;
    }[];
  };
  arweave: MetadataJson;
  mint: string;
  emissionsPerDay: number;
  faction: string;
};

const devnetConstants = {
  mainnet: MAINNET,
  network: WalletAdapterNetwork.Devnet,
  wrappedSol: new anchor.web3.PublicKey(
    'So11111111111111111111111111111111111111112'
  ),
  jungleKey: new anchor.web3.PublicKey(
    '9B399iD1kFwEW7qQo9YuioSMdiXFW9GSp2nZH57GxTUk'
  ),
  rafflesKey: new anchor.web3.PublicKey(
    '6wSTozr75G7VtF77n9YAi9YG1Q9yVLWb6Cp8iV1pRXPm'
  ),
};

const mainnetConstants = {
  mainnet: MAINNET,
  network: WalletAdapterNetwork.Mainnet,
  wrappedSol: new anchor.web3.PublicKey(
    'So11111111111111111111111111111111111111112'
  ),
  jungleKey: new anchor.web3.PublicKey(
    '9B399iD1kFwEW7qQo9YuioSMdiXFW9GSp2nZH57GxTUk'
  ),
  rafflesKey: new anchor.web3.PublicKey(
    '2z7YMP4LZgtfd765v9pvXNzqr2PAdNmjee3kNgSkNGEG'
    // 'DfqH1CPV3aEj5Vncoahbx37apzsBhEEGwtiE9Y6RUFDP'
  ),
};
const constants = MAINNET ? mainnetConstants : devnetConstants;
export default constants;

// "program": "9hvbUZdLfqeQgSQ1JddJy3CedXwpZXVGfJngMG2j58b9",
//     "projectKey": "2z7YMP4LZgtfd765v9pvXNzqr2PAdNmjee3kNgSkNGEG",
//     "password": "jnual858",
