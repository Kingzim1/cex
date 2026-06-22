# Project Brief: Polygon CEX

## Purpose

A centralized cryptocurrency exchange built on Polygon Network with external wallet transfer capabilities. Users can connect their wallets, view balances, trade tokens, and transfer funds to external Polygon addresses.

## Target Users

- Cryptocurrency traders on Polygon Network
- Users wanting to swap tokens with wallet integration
- Traders who need to transfer funds to external addresses

## Core Features

1. Wallet connection via MetaMask/WalletConnect (RainbowKit)
2. Real-time balance display on Polygon Network
3. External wallet transfers (deposit/withdrawal)
4. Quick trading interface between tokens
5. Transaction history tracking

## Key Requirements

### Must Have

- Polygon network integration via wagmi/viem
- Wallet connectivity (MetaMask, WalletConnect)
- Database for user and transaction tracking
- Transfer functionality for external wallets
- Trade interface for token swaps

### Implemented

- [x] Next.js 16 + React 19 + TypeScript
- [x] Wagmi + RainbowKit for Polygon integration
- [x] Drizzle ORM with SQLite for data persistence
- [x] Exchange page at `/exchange`
- [x] Transfer API at `/api/transfer`
