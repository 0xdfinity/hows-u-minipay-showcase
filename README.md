# How's U MiniPay Showcase

Public showcase for the How's U storefront direction and MiniPay wallet entry points.

This repo intentionally excludes the private PocketBase backend, inventory engine, accounting logic, org security rules, and production automations.

## Proof of Ship

This showcase includes a real MiniPay compatibility hook at `hooks/useMiniPay.ts`.

- Detects `window.ethereum` and `window.ethereum.isMiniPay`
- Uses `viem` with the injected MiniPay provider
- Demonstrates the wallet flow in `components/MiniPayDemo.tsx`

Campaign: [Celo Proof of Ship](https://talent.app/~/earn/celo-proof-of-ship)

## Run

```bash
npm install
npm run dev
```
