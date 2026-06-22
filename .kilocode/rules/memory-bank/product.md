# Product Context: Polygon CEX

## Why This Project Exists

A centralized exchange on Polygon Network allowing users to trade cryptocurrencies and transfer funds to/from external wallets. The platform combines traditional exchange features with blockchain-based wallet connectivity.

## Problems It Solves

1. **Trading Access**: Simplifies swapping between tokens on Polygon
2. **Wallet Integration**: Connects external wallets (MetaMask, WalletConnect) for seamless transfers
3. **Balance Management**: Displays wallet and exchange balances in one interface

## How It Works (User Flow)

1. User visits landing page and connects their wallet via RainbowKit
2. User navigates to `/exchange` to access trading interface
3. Wallet balance is displayed using Polygon network (MATIC)
4. User can send MATIC to external wallets via transfer form
5. User can place trades through the quick trade interface
6. Transactions are recorded in the database for tracking

## Key User Experience Goals

- **Wallet First**: Connect external wallet to get started
- **Seamless Transfers**: Send funds to any Polygon address
- **Fast Trading**: Quick token swaps with form interface
- **Transaction History**: Track deposits and withdrawals

## Features Implemented

1. **Wallet Connection**: RainbowKit with MetaMask and WalletConnect support
2. **Balance Display**: Real-time MATIC balance from Polygon network
3. **External Transfers**: Send MATIC to any external address
4. **Quick Trade**: Swap interface between ETH, MATIC, USDC, USDT
5. **Transaction Tracking**: API endpoint for recording transfers
