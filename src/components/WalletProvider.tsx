"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  AlphaWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const Wallet = ({ children }: { children: React.ReactNode }) => {
  if (!process.env.NEXT_PUBLIC_RPC_ENDPOINT) throw new Error("Missing RPC URL");

  const endpoint = process.env.NEXT_PUBLIC_RPC_ENDPOINT;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new AlphaWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  return (
    <div className="flex flex-col md:flex-row h-screen px-4 md:px-32  "> 
      {/* Left Column - Image */}
      <div className="flex-2 flex justify-center items-center mb-6 md:mb-0">
        <img
          src="/solanaImg.png" // Replace with your image path
          alt="Decorative"
          className="max-w-full h-auto object-cover"
        />
      </div>

      {/* Right Column - ConnectionProvider */}
      <div className="flex-1 flex justify-center items-center">
        <ConnectionProvider endpoint={endpoint} config={{ commitment: "confirmed" }}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  );
};

export default Wallet;
