"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  CandyGuard,
  CandyMachine,
  mplCandyMachine,
} from "@metaplex-foundation/mpl-candy-machine";
import { publicKey, unwrapOption } from "@metaplex-foundation/umi"; // ✅ Removed 'some'
import {
  fetchCandyMachine,
  fetchCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { mintV2 } from "@metaplex-foundation/mpl-candy-machine";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import { fromTxError } from "../utils/errors";

if (!process.env.NEXT_PUBLIC_RPC_ENDPOINT) {
  throw new Error("No RPC endpoint. Please, provide a NEXT_PUBLIC_RPC_ENDPOINT env variable");
}

const umi = createUmi(process.env.NEXT_PUBLIC_RPC_ENDPOINT).use(mplCandyMachine());
const candyMachineId = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID;

const MintNFT: React.FC = () => {
  const [candyMachine, setCandyMachine] = useState<CandyMachine | null>(null);
  const [candyGuard, setCandyGuard] = useState<CandyGuard | null>(null);
  const wallet = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);

  const fetchCandyMachineData = useCallback(async () => {
    if (!candyMachineId) throw new Error("Please provide a NEXT_PUBLIC_CANDY_MACHINE_ID env variable");
    
    const candyMachinePublicKey = publicKey(candyMachineId);
    const fetchedCandyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);
    const fetchedCandyGuard = await fetchCandyGuard(umi, fetchedCandyMachine.mintAuthority);

    setCandyMachine(fetchedCandyMachine);
    setCandyGuard(fetchedCandyGuard);
  }, []);

  useEffect(() => {
    fetchCandyMachineData();
  }, [fetchCandyMachineData]);

  const solPaymentGuard = useMemo(() => {
    return candyGuard ? unwrapOption(candyGuard.guards.solPayment) : null;
  }, [candyGuard]);

  const cost = useMemo(
    () =>
      candyGuard
        ? solPaymentGuard
          ? `${Number(solPaymentGuard.lamports.basisPoints) / 1e9} SOL`
          : "Free mint"
        : "...",
    [candyGuard, solPaymentGuard] // ✅ Added solPaymentGuard to dependencies
  );
  

  const mint = async () => {
    if (!candyMachine) throw new Error("No candy machine");
    if (!candyGuard) throw new Error("No candy guard found. Set up a guard for your candy machine.");

    setIsLoading(true);

    const umiWalletAdapter = umi.use(walletAdapterIdentity(wallet));
    const nftMint = generateSigner(umiWalletAdapter);

    try {
      await transactionBuilder()
        .add(setComputeUnitLimit(umiWalletAdapter, { units: 800_000 }))
        .add(
          mintV2(umiWalletAdapter, {
            candyMachine: candyMachine.publicKey,
            nftMint,
            collectionMint: candyMachine.collectionMint,
            collectionUpdateAuthority: candyMachine.authority,
            tokenStandard: candyMachine.tokenStandard,
            candyGuard: candyGuard?.publicKey,
            mintArgs: {}, // ✅ Removed unnecessary variable reassignment
          })
        )
        .sendAndConfirm(umiWalletAdapter);

      setFormMessage("Minted successfully!");
    } catch (e: unknown) { // ✅ Use 'unknown' instead of 'any' for error handling
      const msg = e instanceof Error ? fromTxError(e) ?? e.message : "An unknown error occurred.";
      setFormMessage(msg);
    } finally {
      setIsLoading(false);
      setTimeout(() => setFormMessage(null), 5000);
    }
  };

  return (
    <>

      <Head>
        <title>Mint NFT</title>
        <meta name="description" content="Mint your unique NFT now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col items-center py-24">
        <div className="flex flex-col items-center bg-gray-900 p-8 rounded-xl border border-gray-700 w-80">
          <h1 className="text-2xl font-bold text-white">Mint Now</h1>
          <p className="text-gray-400 text-center my-4">
            Mint your NFT now. You will receive a random NFT from the collection.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg w-full">
            <div className="flex justify-between text-white">
              <span>Public</span>
              <b>{cost}</b>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Live</span>
            </div>
            <button
              disabled={!wallet.publicKey || isLoading}
              onClick={mint}
              className="mt-8 w-full bg-green-500 text-black font-bold py-2 px-4 rounded hover:bg-green-600 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isLoading ? "Minting..." : "Mint"}
            </button>
            <div className="justify-center flex  mt-4 w-full ">
            <WalletMultiButton className="mt-12 bg-green item-center" />
            </div>
            <p className="text-center text-sm text-gray-300 mt-2">{formMessage}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MintNFT;
