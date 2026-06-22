"use client";

import { useAccount } from "wagmi";
import { polygon } from "wagmi/chains";
import { useBalance } from "wagmi";

const ZIMAX_TOKEN_ADDRESS = "0xabcdefabcdefabcdefabcdefabcdefabcdefab" as `0x${string}`;

interface BalanceDisplayProps {
  balance?: string;
  symbol?: string;
}

export default function BalanceDisplay({ balance, symbol }: BalanceDisplayProps) {
  const { address } = useAccount();
  const { data: maticBalance } = useBalance({
    address,
    chainId: polygon.id,
    query: { enabled: !!address },
  });
  const { data: zimaxBalance } = useBalance({
    address,
    chainId: polygon.id,
    token: ZIMAX_TOKEN_ADDRESS,
    query: { enabled: !!address },
  });

  return (
    <div className="bg-neutral-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Wallet Balance</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-neutral-700">
          <span className="text-neutral-400">MATIC</span>
          <span className="font-mono text-lg">{maticBalance?.formatted || "0.0"}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-neutral-700">
          <span className="text-neutral-400">ZIMAX</span>
          <span className="font-mono text-lg">{zimaxBalance?.formatted || "0.0"}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-neutral-400">USD Value</span>
          <span className="font-mono text-lg">$0.00</span>
        </div>
      </div>
    </div>
  );
}