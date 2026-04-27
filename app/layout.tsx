import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const instrumentSans = Instrument_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "How's U MiniPay Showcase",
  description: "Public showcase for the How's U storefront shell and MiniPay checkout experience.",
  other: {
    "talentapp:project_verification":
      "3d7c3074b0d0ad3ee41e19d845785335d4a97e6d0364288a8f391397a35d3be77f50ec97f51c48f21a8ff5e49e9eea5163d9a21b6d42b0876c201e48bfca8ee5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
