import { PublicKey } from '@solana/web3.js';
import { createContext } from 'react';

export const RaffleContext = createContext<IRaffleContext>({
  tokens: 0,
  raffles: [],
  myRaffles: [],
  stakerInfo: {},
  fetchRaffle: () => new Promise(() => {}),
  updateTokens: () => new Promise(() => {}),
  refreshRaffle: () => new Promise(() => {}),
  fetchMyEntry: () => new Promise(() => {}),
  buyTickets: () => new Promise(() => {}),
});

export interface IRaffleContext {
  tokens: number;
  raffles: Raffle[];
  myRaffles: { raffle: Raffle; isWon: boolean }[];
  stakerInfo: object;
  updateTokens: () => Promise<void>;
  fetchRaffle: (key: PublicKey) => Promise<Raffle | undefined>;
  refreshRaffle: (key: PublicKey) => Promise<Raffle | undefined>;
  fetchMyEntry: (key: PublicKey) => Promise<Participant | undefined>;
  buyTickets: (key: PublicKey, tickets: number) => Promise<void>;
}

export interface Project {
  key: PublicKey;
  address: PublicKey;
  vault: PublicKey;
  coinMint: PublicKey;
  decimals: number;
}

export interface Raffle {
  key: PublicKey;
  name: string;
  image: string;
  raffleType: string;
  mint: PublicKey;
  collectionSize: number;
  price: number;
  winners: number;
  start: Date;
  end: Date;
  maxTickets: number;
  maxTicketsPerPerson: number;
  tickets: number;
  participants: Participant[];
  isStarted: boolean;
  isClosed: boolean;
}

export interface Participant {
  owner: PublicKey;
  tickets: number;
  isWon: boolean;
  isDistributed: boolean;
}

export interface RaffleDetails {
  start: number;
  descriptionTitle: string;
  description: string;
  discord: string;
  magicEden: string;
  twitter: string;
}
