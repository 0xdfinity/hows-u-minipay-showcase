# How's U MiniPay Showcase

How's U is a business operating system for sellers who run their store through content, chat, and fast follow-up.

This public repo shows the storefront direction and the MiniPay payment experience behind the project. A seller can present products in a clean, mobile-first store, let buyers move through a simple checkout flow, and use MiniPay for fast wallet-based payments without adding extra friction.

## What sellers can do

- Share a clean storefront link
- Show products in a feed-style layout
- Let buyers start checkout from the product surface
- Use MiniPay as an easy payment path for mobile users

## What buyers can do

- Browse products quickly
- See a simple checkout entry point
- Open the payment flow inside MiniPay
- Confirm payment with the wallet already available in MiniPay

## MiniPay

This showcase includes a working MiniPay compatibility layer:

- `hooks/useMiniPay.ts` detects the injected MiniPay wallet
- `lib/minipay.ts` sets up wallet access with `viem`
- `components/MiniPayDemo.tsx` shows the payment entry flow in the UI

## What this repo includes

- Next.js App Router frontend
- Product-facing landing page
- Storefront preview
- MiniPay-ready demo checkout flow

## What this repo does not include

This repo does not include the private production backend, live business data, inventory engine, accounting logic, organization security rules, or deployment secrets.

## Run locally

```bash
npm install
npm run dev
```
