import { BN, Program, Provider } from '@project-serum/anchor';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { useWallet } from '@solana/wallet-adapter-react';
import {
  Keypair,
  PublicKey,
  SystemProgram,
  SYSVAR_CLOCK_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import constants from '../constants';
import jungleIdl from '../constants/idl/jungle.json';
import rafflesIdl from '../constants/idl/raffles.json';
import { IDL as JungleIdl } from '../constants/types/jungle';
import { IDL as RafflesIdl } from '../constants/types/raffles';
import useApi from '../hooks/useApi';
import { Project, Raffle, RaffleContext } from './index';

const decodeRaffleType = (raffleType: any) => {
  switch (raffleType) {
    case 1:
      return 'NFT';
    case 2:
      return 'Whitelist Spots';
    case 3:
      return 'Merch';
    case 4:
      return 'Holder Only';
    default:
      throw new Error('Invalid raffle type');
  }
};

const getCustomErrorCode = (err: any) => {
  if (err.logs) {
    for (let log of err.logs) {
      try {
        return log.match(/0x177\d/i)[0];
      } catch (e) {
        continue;
      }
    }
  }
  return false;
};

const customErrorMessage = (err: any) => {
  let code = getCustomErrorCode(err);
  switch (code) {
    case '0x1770':
      return 'Total winners limit exceeded!';
    case '0x1771':
      return 'You cannot buy more tickets, limit reached!';
    case '0x1772':
      return 'Raffle is not started yet!!';
    case '0x1773':
      return 'Raffle is not ended yet!!';
    default:
      return 'Unexpected Error!';
  }
};

export default function RafflesProvider({ connection, children }: any) {
  const wallet = useWallet();

  const api = useApi();

  // console.log(RafflesIdl);
  // confirmed provider
  const provider = useMemo(() => {
    if (!connection && !wallet) return;
    return new Provider(connection, wallet as any, {
      preflightCommitment: 'confirmed',
    });
  }, [connection, wallet]);

  const rafflesProgram = useMemo(() => {
    if (!provider) return;
    return new Program(RafflesIdl, rafflesIdl.metadata.address, provider);
  }, [provider]);

  const jungleProgram = useMemo(() => {
    if (!provider) return;
    return new Program(JungleIdl, jungleIdl.metadata.address, provider);
  }, [provider]);

  const [stakerInfo, setStakerInfo] = useState<{
    holdings: number;
  }>({
    holdings: 0,
  });

  const [project, setProject] = useState<Project>();
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [tokens, setTokens] = useState<number>(0);
  const [myRaffles, setMyRaffles] = useState<
    { raffle: Raffle; isWon: boolean }[]
  >([]);

  // fetch staker info
  const fetchStakerInfo = useCallback(
    async (walletAddress?: PublicKey) => {
      const walletKey = walletAddress || wallet.publicKey;
      if (!jungleProgram || !walletKey || !provider) return;
      console.log('Fetching Staker Info!!');
      try {
        const [jungleAddress] = await PublicKey.findProgramAddress(
          [Buffer.from('jungle', 'utf8'), constants.jungleKey.toBuffer()],
          jungleProgram.programId
        );

        const [stakerInfo] = await PublicKey.findProgramAddress(
          [
            Buffer.from('staker', 'utf8'),
            jungleAddress.toBuffer(),
            walletKey.toBuffer(),
          ],
          jungleProgram.programId
        );

        const stakerInfoAccount = await jungleProgram.account.stakerInfo.fetch(
          stakerInfo
        );

        let holdings = 0;
        try {
          holdings = stakerInfoAccount.holdings.toNumber();
        } catch (e) {
          console.error('BN issue with holdings');
          holdings = 0;
        }
        const tokens = stakerInfoAccount.tokens.div(new BN(1000)).toNumber();
        const si = { holdings, tokens };
        !walletAddress && setStakerInfo(si);
        return si;
      } catch (e) {
        console.log('Staker Info Account not Created Yet!');
        console.error(e);
      }
    },
    [wallet.publicKey, provider]
  );
  useEffect(() => {
    fetchStakerInfo();
  }, [fetchStakerInfo]);

  const fetchProject = useCallback(async () => {
    if (!rafflesProgram) return;

    const [project] = await PublicKey.findProgramAddress(
      [Buffer.from('project'), constants.rafflesKey.toBuffer()],
      rafflesProgram.programId
    );

    const projectAccount = await rafflesProgram.account.project.fetch(project);
    console.log('project', projectAccount);

    setProject({
      address: project,
      key: projectAccount.key,
      vault: projectAccount.vault,
      coinMint: projectAccount.mint,
      decimals: projectAccount.decimals,
    });
  }, [rafflesProgram]);
  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  const updateTokens = useCallback(async () => {
    if (!wallet.publicKey || !project) return;
    const tokenAccount = await Token.getAssociatedTokenAddress(
      ASSOCIATED_TOKEN_PROGRAM_ID,
      TOKEN_PROGRAM_ID,
      project.coinMint,
      wallet.publicKey
    );
    const { amount } = await new Token(
      connection,
      project.coinMint,
      TOKEN_PROGRAM_ID,
      Keypair.generate()
    ).getAccountInfo(tokenAccount);

    setTokens(amount.toNumber() / 10 ** project.decimals);
  }, [project, wallet]);
  useEffect(() => {
    updateTokens();
  }, [updateTokens]);

  const fetchRaffles = useCallback(async () => {
    if (!rafflesProgram || !project) return;

    const rafflesAccounts = await rafflesProgram.account.raffle.all([
      {
        memcmp: {
          offset: 8, // Default Offst
          bytes: project.address.toString(),
        },
      },
    ]);

    let raffles = (
      await Promise.all(
        rafflesAccounts.map(async (raffle) => {
          const raffleEnd = new Date(raffle.account.end.toNumber());
          const isClosed = raffleEnd < new Date();
          if (isClosed && raffle.account.tickets.toNumber() === 0) return;

          const participants = await rafflesProgram.account.participant.all([
            {
              memcmp: {
                offset: 8, // Default Offst
                bytes: raffle.account.key.toString(),
              },
            },
          ]);
          const details = (
            await api.get('rafflesDetails/' + raffle.account.key)
          ).data;
          const start = details?.start
            ? new Date(raffle.account.start.toNumber())
            : new Date();

          return {
            key: raffle.account.key,
            name: raffle.account.name,
            image: raffle.account.image,
            raffleType: decodeRaffleType(raffle.account.raffleType),
            mint: raffle.account.mint,
            collectionSize: raffle.account.collectionSize.toNumber(),
            price: raffle.account.price.toNumber(),
            winners: raffle.account.winners.toNumber(),
            start,
            end: raffleEnd,
            maxTickets: raffle.account.maxTickets.toNumber(),
            maxTicketsPerPerson:
              raffle.account.maxTicketsPerParticipant.toNumber() || 999999,
            tickets: raffle.account.tickets.toNumber(),
            participants: participants.map((participant) => ({
              owner: participant.account.owner,
              tickets: participant.account.tickets.toNumber(),
              isWon: participant.account.isWon,
              isDistributed: participant.account.isDistributed,
            })),
            isStarted: start <= new Date(),
            isClosed: raffleEnd <= new Date(),
          };
        })
      )
    ).filter((r) => r);
    raffles = [
      ...raffles
        .filter((raffle) => raffle && raffle.isStarted && !raffle.isClosed)
        .sort((a: any, b: any) => b.tickets - a.tickets),
      ...raffles
        .filter((raffle) => raffle && !raffle.isStarted)
        .sort((a: any, b: any) => b.start.getTime() - a.start.getTime()),
      ...raffles
        .filter((raffle) => raffle && raffle.isClosed)
        .sort((a: any, b: any) => b.end.getTime() - a.end.getTime()),
    ];
    setRaffles(raffles as any);
  }, [rafflesProgram, project]);
  useEffect(() => {
    fetchRaffles();
  }, [fetchRaffles]);

  const fetchRaffle = useCallback(
    async (key) => {
      if (!rafflesProgram) return;

      const [raffleAddress] = await PublicKey.findProgramAddress(
        [Buffer.from('raffle'), key.toBuffer()],
        rafflesProgram.programId
      );

      const raffle = await rafflesProgram.account.raffle.fetch(raffleAddress);

      const participants = await rafflesProgram.account.participant.all([
        {
          memcmp: {
            offset: 8, // Default Offst
            bytes: raffle.key.toString(),
          },
        },
      ]);

      const raffleEnd = new Date(raffle.end.toNumber());

      const details = (await api.get('rafflesDetails/' + raffle.key)).data;
      const start = details?.start
        ? new Date(details.start)
        : new Date(Date.now() - 10000);

      return {
        key: raffle.key,
        name: raffle.name,
        image: raffle.image,
        raffleType: decodeRaffleType(raffle.raffleType),
        mint: raffle.mint,
        collectionSize: raffle.collectionSize.toNumber(),
        price: raffle.price.toNumber(),
        winners: raffle.winners.toNumber(),
        end: raffleEnd,
        start,
        maxTickets: raffle.maxTickets.toNumber(),
        maxTicketsPerPerson:
          raffle.maxTicketsPerParticipant.toNumber() || 999999,
        tickets: raffle.tickets.toNumber(),
        participants: participants.map((participant) => ({
          owner: participant.account.owner,
          tickets: participant.account.tickets.toNumber(),
          isWon: participant.account.isWon,
          isDistributed: participant.account.isDistributed,
        })),
        isStarted: start < new Date(),
        isClosed: raffleEnd < new Date(),
      };
    },
    [rafflesProgram]
  );

  const refreshRaffle = useCallback(
    async (key) => {
      const raffle = await fetchRaffle(key);
      if (!raffle) return;
      const index = raffles.findIndex((raffle) => raffle.key.equals(key));
      if (index !== -1) {
        const newRaffles = [...raffles];
        newRaffles[index] = raffle;
        setRaffles(newRaffles);
      }
      return raffle;
    },
    [raffles]
  );

  const fetchMyRaffles = useCallback(async () => {
    if (!rafflesProgram || !project || !wallet.publicKey) return [];

    const myParticipations = await rafflesProgram.account.participant.all([
      {
        memcmp: {
          offset: 8 + 32 + 1, // Default Offst
          bytes: wallet.publicKey.toString(),
        },
      },
    ]);

    const raffles = await Promise.all(
      myParticipations.map(async (participation) => {
        const raffleKey = participation.account.raffle;
        const [raffleAddress] = await PublicKey.findProgramAddress(
          [Buffer.from('raffle'), raffleKey.toBuffer()],
          rafflesProgram.programId
        );

        try {
          const raffle = await rafflesProgram.account.raffle.fetch(
            raffleAddress
          );
          if (raffle.project.toString() !== project.address.toString()) return;
          const participants = await rafflesProgram.account.participant.all([
            {
              memcmp: {
                offset: 8, // Default Offst
                bytes: raffle.key.toString(),
              },
            },
          ]);

          const details = (await api.get('rafflesDetails/' + raffle.key)).data;

          const start = details?.start ? new Date(details.start) : new Date();

          return {
            raffle: {
              key: raffle.key,
              name: raffle.name,
              image: raffle.image,
              raffleType: decodeRaffleType(raffle.raffleType),
              mint: raffle.mint,
              collectionSize: raffle.collectionSize.toNumber(),
              price: raffle.price.toNumber(),
              winners: raffle.winners.toNumber(),
              end: new Date(raffle.end.toNumber()),
              start,
              maxTickets: raffle.maxTickets.toNumber(),
              maxTicketsPerPerson:
                raffle.maxTicketsPerParticipant.toNumber() || 999999,
              tickets: raffle.tickets.toNumber(),
              participants: participants.map((participant) => ({
                owner: participant.account.owner,
                tickets: participant.account.tickets.toNumber(),
                isWon: participant.account.isWon,
                isDistributed: participant.account.isDistributed,
              })),
              isStarted: start < new Date(),
              isClosed: new Date(raffle.end.toNumber()) < new Date(),
            },
            isWon: participation.account.isWon,
          };
        } catch (error) {
          return;
        }
      })
    );

    setMyRaffles(raffles.filter((raffle) => raffle) as any);
  }, [rafflesProgram, project, wallet.publicKey]);
  useEffect(() => {
    fetchMyRaffles();
  }, [fetchMyRaffles]);

  const fetchMyEntry = useCallback(
    async (key) => {
      if (!rafflesProgram || !wallet.publicKey) return;

      const raffle = await fetchRaffle(key);
      if (!raffle) return;

      return raffle.participants.find(
        (part) => part.owner.toString() == wallet.publicKey?.toString()
      );
    },
    [rafflesProgram, wallet.publicKey]
  );

  const buyTickets = useCallback(
    async (rafflekey, tickets) => {
      console.log('rafflekey', rafflekey.toString(), tickets);
      if (!provider || !rafflesProgram || !project || !wallet.publicKey) return;

      const buyTicketsToast = toast.loading(`Buying ${tickets} tickets`);

      const raffleAccount = await fetchRaffle(rafflekey);

      console.log({ raffleAccount });
      if (!raffleAccount) {
        toast.update(buyTicketsToast, {
          render: 'Raffle Not Found.',
          type: 'error',
          isLoading: false,
          closeOnClick: true,
          closeButton: true,
          autoClose: 4000,
        });
        throw Error('Raffle Not Found.');
      }

      const [raffle] = await PublicKey.findProgramAddress(
        [Buffer.from('raffle', 'utf8'), rafflekey.toBuffer()],
        rafflesProgram.programId
      );

      const [participant, participantBump] = await PublicKey.findProgramAddress(
        [
          Buffer.from('participant', 'utf8'),
          rafflekey.toBuffer(),
          wallet.publicKey.toBuffer(),
        ],
        rafflesProgram.programId
      );

      const instructions: TransactionInstruction[] = [];

      try {
        // To see if the participant is already initialized
        await rafflesProgram.account.participant.fetch(participant);
      } catch (e) {
        instructions.push(
          rafflesProgram.instruction.initParticipant(participantBump, {
            accounts: {
              raffle,
              participant,
              owner: wallet.publicKey,
              systemProgram: SystemProgram.programId,
            },
          })
        );
      }

      try {
        const tokenAccount = await Token.getAssociatedTokenAddress(
          ASSOCIATED_TOKEN_PROGRAM_ID,
          TOKEN_PROGRAM_ID,
          project.coinMint,
          wallet.publicKey
        );

        try {
          var temp = await new Token(
            connection,
            project.coinMint,
            TOKEN_PROGRAM_ID,
            Keypair.generate()
          ).getAccountInfo(tokenAccount);
          if (
            raffleAccount.price * 10 ** project.decimals * tickets >
            temp.amount.toNumber()
          ) {
            throw Error('Insufficient funds.');
          }
        } catch (e) {
          toast.update(buyTicketsToast, {
            render: "You don't have enough tokens to buy tickets.",
            type: 'error',
            isLoading: false,
            closeOnClick: true,
            closeButton: true,
            autoClose: 4000,
          });
          return;
        }

        const accounts = {
          project: project.address,
          vault: project.vault,
          raffle,
          participant,
          tokenAccount,
          owner: provider.wallet.publicKey,
          tokenProgram: TOKEN_PROGRAM_ID,
          clock: SYSVAR_CLOCK_PUBKEY,
        };
        console.log(provider.wallet.publicKey);
        Object.entries(accounts).forEach(([key, value]) => {
          console.log(`${key}: ${value.toString()}`);
        });
        const txid = await rafflesProgram.rpc.buyTickets(new BN(tickets), {
          accounts,
          instructions,
        });
        console.log('Tx:', txid);

        toast.update(buyTicketsToast, {
          render: `Bought ${tickets} tickets`,
          type: 'success',
          isLoading: false,
          closeOnClick: true,
          closeButton: true,
          autoClose: 4000,
        });

        fetchMyRaffles();
      } catch (e) {
        toast.update(buyTicketsToast, {
          render: customErrorMessage(e),
          type: 'error',
          isLoading: false,
          closeOnClick: true,
          closeButton: true,
          autoClose: 4000,
        });
        console.error(e);
      }
    },
    [provider, rafflesProgram, project]
  );

  return (
    <RaffleContext.Provider
      value={{
        tokens,
        raffles,
        myRaffles,
        stakerInfo,
        fetchRaffle,
        updateTokens,
        refreshRaffle,
        fetchMyEntry,
        buyTickets,
      }}
    >
      {children}
      <ToastContainer
        position='bottom-left'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{' '}
    </RaffleContext.Provider>
  );
}
