"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import { polygon } from "wagmi/chains";
import BalanceDisplay from "@/components/balance-display";
import TransferForm from "@/components/transfer-form";
import TradeForm from "@/components/trade-form";

export default function ExchangePage() {
  const { address, isConnected } = useAccount();
  const { data: balanceData } = useBalance({
    address,
    chainId: polygon.id,
    query: { enabled: !!address },
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Polygon CEX</h1>
        <ConnectButton />
      </header>

      {isConnected && address ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BalanceDisplay balance={balanceData?.formatted} symbol={balanceData?.symbol} />
            <TradeForm />
          </div>
          <div className="space-y-6">
            <TransferForm />
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl mb-4">Connect Your Wallet</h2>
          <p className="text-neutral-400 mb-6">Connect a wallet to start trading on Polygon</p>
        </div>
      )}
    </main>
  );
}