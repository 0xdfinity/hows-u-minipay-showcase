"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Copy, Smartphone, Wallet } from "lucide-react";
import { toast } from "sonner";
import { useMiniPay } from "@/hooks/useMiniPay";
import { shortenAddress } from "@/lib/minipay";

const demoItems = [
  { name: "Store setup", value: "Ready" },
  { name: "MiniPay hook", value: "useMiniPay" },
  { name: "Wallet flow", value: "MiniPay + viem" },
];

export function MiniPayDemo() {
  const [copied, setCopied] = useState(false);
  const { address, connect, hasProvider, insideMiniPay, isPending } = useMiniPay();

  const handleMiniPayAction = () => {
    if (!insideMiniPay) {
      toast.message("Open this page inside MiniPay to test the wallet flow.");
      return;
    }

    void (async () => {
      try {
        await connect();
        toast.success("MiniPay wallet detected.");
      } catch (error) {
        const message = error instanceof Error ? error.message : "MiniPay did not respond.";
        toast.error(message);
      }
    })();
  };

  const handleCopy = async () => {
    if (!address) {
      return;
    }

    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success("Wallet address copied.");
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Could not copy the wallet address.");
    }
  };

  return (
    <section className="glass-card rounded-[2rem] p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
            MiniPay shell
          </div>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] text-white">
            Wallet touchpoints, kept simple.
          </h2>
        </div>

        <span className="inline-flex overflow-hidden rounded-full border border-white/10">
          <Image
            src="/brand/minipay-logo-dark.svg"
            alt="MiniPay"
            width={84}
            height={84}
            className="h-10 w-10"
          />
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
        <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5">
          {insideMiniPay ? "Inside MiniPay" : hasProvider ? "Wallet provider found" : "Open in MiniPay"}
        </span>
        <Link
          href="https://talent.app/~/earn/celo-proof-of-ship"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-white/8 px-3 py-1.5 text-zinc-300 transition hover:border-white/15 hover:text-white"
        >
          Celo Proof of Ship
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div className="mt-6 rounded-[1.7rem] border border-white/8 bg-black/25 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-zinc-400">Demo checkout</p>
            <p className="mt-1 text-lg font-medium text-white">Premium store item</p>
          </div>
          <p className="text-xl font-medium text-white">$12.50</p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {demoItems.map((item) => (
            <div key={item.name} className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3">
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.name}</p>
              <p className="mt-2 text-sm text-zinc-200">{item.value}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleMiniPayAction}
          disabled={isPending}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {insideMiniPay ? <Wallet className="size-4" /> : <Smartphone className="size-4" />}
          {isPending ? "Checking MiniPay..." : insideMiniPay ? "Use MiniPay wallet" : "Open in MiniPay"}
        </button>

        {address ? (
          <div className="mt-4 rounded-[1.35rem] border border-emerald-500/20 bg-emerald-500/10 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-sm text-emerald-200">
                  <CheckCircle2 className="size-4" />
                  Wallet detected
                </div>
                <p className="mt-2 text-base font-medium text-white">{shortenAddress(address)}</p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/[0.04]"
              >
                <Copy className="size-4" />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
