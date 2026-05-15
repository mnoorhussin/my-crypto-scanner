import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletContextProvider from "@/components/WalletContextProvider";
import "@solana/wallet-adapter-react-ui/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeDeGen - Institutional Grade Token Scanner",
  description: "Filter Solana memecoins by liquidity and find the next gem with institutional-grade data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <WalletContextProvider>
          <div className="min-h-screen bg-slate-950">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </WalletContextProvider>
      </body>
    </html>
  );
}
