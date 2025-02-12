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

// ✅ Use ES module import instead of require
import "@solana/wallet-adapter-react-ui/styles.css";

const Wallet = ({ children }: { children: React.ReactNode }) => {
  if (!process.env.NEXT_PUBLIC_RPC_ENDPOINT) throw new Error("Missing RPC URL");

  const endpoint = process.env.NEXT_PUBLIC_RPC_ENDPOINT;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new AlphaWalletAdapter(), // ✅ Replacing BackpackWalletAdapter
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint} config={{ commitment: "confirmed" }}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Wallet;
