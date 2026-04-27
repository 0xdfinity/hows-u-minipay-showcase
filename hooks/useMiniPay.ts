"use client";

import { useEffect, useState, useTransition } from "react";
import { getMiniPayAddresses, getMiniPayWalletClient, getMiniPayProvider } from "@/lib/minipay";

type UseMiniPayState = {
  hasProvider: boolean;
  insideMiniPay: boolean;
  address: string | null;
  isPending: boolean;
  connect: () => Promise<void>;
};

export function useMiniPay(): UseMiniPayState {
  const [hasProvider, setHasProvider] = useState(false);
  const [insideMiniPay, setInsideMiniPay] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const provider = getMiniPayProvider();
    const timer = window.setTimeout(() => {
      setHasProvider(Boolean(provider));
      setInsideMiniPay(Boolean(provider?.isMiniPay));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const connect = async () => {
    await new Promise<void>((resolve, reject) => {
      startTransition(async () => {
        try {
          const [walletAddress] = await getMiniPayAddresses();
          await getMiniPayWalletClient();
          setAddress(walletAddress ?? null);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  };

  return {
    hasProvider,
    insideMiniPay,
    address,
    isPending,
    connect,
  };
}
