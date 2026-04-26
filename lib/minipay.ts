import { createWalletClient, custom } from "viem";
import { celo } from "viem/chains";

type MiniPayProvider = {
  isMiniPay?: boolean;
  request: (args: { method: string; params?: unknown[] | object }) => Promise<unknown>;
};

declare global {
  interface Window {
    ethereum?: MiniPayProvider;
  }
}

export function getMiniPayProvider() {
  if (typeof window === "undefined") {
    return null;
  }

  const provider = window.ethereum;

  if (!provider?.request) {
    return null;
  }

  return provider;
}

export function isMiniPay() {
  return Boolean(getMiniPayProvider()?.isMiniPay);
}

export async function getMiniPayAddresses() {
  const provider = getMiniPayProvider();

  if (!provider) {
    throw new Error("MiniPay is not available in this browser.");
  }

  const accounts = (await provider.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts;
}

export async function getMiniPayWalletClient() {
  const provider = getMiniPayProvider();

  if (!provider) {
    throw new Error("MiniPay is not available in this browser.");
  }

  return createWalletClient({
    chain: celo,
    transport: custom(provider),
  });
}

export function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
