import Image from "next/image";
import { ArrowRight, Coins, Package2, ShieldCheck, Store, Users } from "lucide-react";
import { AppLogo } from "@/components/AppLogo";
import { MiniPayDemo } from "@/components/MiniPayDemo";

const highlights = [
  {
    title: "Storefront shell",
    description: "A clean landing and feed direction for image-first selling.",
    icon: Store,
  },
  {
    title: "MiniPay checkout",
    description: "MiniPay detection and wallet access wired with viem.",
    icon: Coins,
  },
  {
    title: "Seller workflow",
    description: "A focused shell for setup, payment, and follow-up.",
    icon: Users,
  },
];

const sellerFlow = [
  {
    title: "Set up the store",
    detail: "Brand, products, and a clean public link.",
    icon: Package2,
  },
  {
    title: "Collect payment",
    detail: "MiniPay checkout is surfaced directly in the store flow.",
    icon: Coins,
  },
  {
    title: "Confirm the order",
    detail: "The private production backend handles stock, accounting, and team actions.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 md:px-8">
        <header className="flex items-center justify-between gap-4">
          <AppLogo />
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:border-white/15 hover:text-white"
          >
            MiniPay demo
            <ArrowRight className="size-4" />
          </a>
        </header>

        <main className="flex-1 py-10 md:py-16">
          <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                Public showcase
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-medium tracking-[-0.065em] text-white md:text-7xl">
                How&apos;s U for MiniPay checkout and modern storefront selling.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                This open-source shell shows the storefront direction, payment entry points,
                and MiniPay wallet touchpoints behind How&apos;s U.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map(({ title, description, icon: Icon }) => (
                  <article key={title} className="glass-card rounded-[1.55rem] p-4">
                    <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-300">
                      <Icon className="size-4" />
                    </span>
                    <h2 className="mt-4 text-base font-medium text-white">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="glass-card overflow-hidden rounded-[2rem] p-3 md:p-4">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-[#040405] shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                <Image
                  src="/brand/landing-store-preview.jpg"
                  alt="How's U storefront showcase"
                  width={800}
                  height={533}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </section>

          <section id="demo" className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="glass-card rounded-[2rem] p-6 surface-grid">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                Seller flow
              </div>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] text-white">
                Designed to feel simple before it feels technical.
              </h2>
              <div className="mt-8 space-y-4">
                {sellerFlow.map(({ title, detail, icon: Icon }) => (
                  <article
                    key={title}
                    className="rounded-[1.5rem] border border-white/8 bg-black/20 p-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-100">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{detail}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <MiniPayDemo />
          </section>
        </main>

        <footer className="border-t border-white/8 py-6 text-sm text-zinc-500">
          This repo intentionally excludes the private PocketBase backend, live business data,
          accounting engine, org rules, and production automations.
        </footer>
      </div>
    </div>
  );
}
