"use client";

import { useState } from "react";

export default function TradeForm() {
  const [fromAsset, setFromAsset] = useState("ETH");
  const [toAsset, setToAsset] = useState("USDC");
  const [amount, setAmount] = useState("");

  return (
    <div className="bg-neutral-800 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Trade</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-neutral-400 mb-2">From</label>
          <div className="flex gap-2">
            <select
              value={fromAsset}
              onChange={(e) => setFromAsset(e.target.value)}
              className="bg-neutral-700 rounded px-3 py-2 text-white"
            >
              <option value="ETH">ETH</option>
              <option value="MATIC">MATIC</option>
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
            </select>
            <input
              type="number"
              step="0.0001"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              className="flex-1 bg-neutral-700 rounded px-3 py-2 text-white placeholder-neutral-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-neutral-400 mb-2">To</label>
          <div className="flex gap-2">
            <select
              value={toAsset}
              onChange={(e) => setToAsset(e.target.value)}
              className="bg-neutral-700 rounded px-3 py-2 text-white"
            >
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
              <option value="ETH">ETH</option>
              <option value="MATIC">MATIC</option>
            </select>
            <input
              type="number"
              step="0.0001"
              placeholder="0.0"
              readOnly
              className="flex-1 bg-neutral-700 rounded px-3 py-2 text-white placeholder-neutral-500"
            />
          </div>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 rounded py-2 font-medium">
          Place Order
        </button>
      </div>
    </div>
  );
}