"use client";

import { useState } from "react";
import { useAccount, useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { polygon } from "wagmi/chains";

export default function TransferForm() {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const { isConnected } = useAccount();
  const { sendTransaction, isPending, isSuccess, data: txData } = useSendTransaction();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !address) return;

    sendTransaction({
      to: address as `0x${string}`,
      value: parseEther(amount),
      chainId: polygon.id,
    });
  };

  return (
    <div className="bg-neutral-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">External Wallet Transfer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-neutral-400 mb-2">Recipient Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="0x..."
            className="w-full bg-neutral-700 rounded px-3 py-2 text-white placeholder-neutral-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-400 mb-2">Amount (MATIC)</label>
          <input
            type="number"
            step="0.0001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            className="w-full bg-neutral-700 rounded px-3 py-2 text-white placeholder-neutral-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!isConnected || isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-700 rounded py-2 font-medium"
        >
          {isPending ? "Sending..." : "Send"}
        </button>
        {isSuccess && txData && (
          <p className="text-green-400 text-sm">
            Transaction sent! Hash: {txData.slice(0, 10)}...
          </p>
        )}
      </form>
    </div>
  );
}