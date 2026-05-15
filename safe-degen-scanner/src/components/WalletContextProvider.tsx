'use client';

import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Import the styles
import '@solana/wallet-adapter-react-ui/styles.css';

interface WalletContextProviderProps {
  children: React.ReactNode;
}

export default function WalletContextProvider({ children }: WalletContextProviderProps) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = clusterApiUrl('mainnet-beta');
  
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => network, [network]);

  // Add specific wallet adapters
  const wallets = useMemo(() => [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter()
  ], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
