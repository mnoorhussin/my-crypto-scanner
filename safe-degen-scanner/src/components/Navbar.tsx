'use client';

import { Shield, Menu, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import RewardsBadge from './RewardsBadge';
import PointsDisplay from './PointsDisplay';
import dynamic from 'next/dynamic';

const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { 
    ssr: false,
    loading: () => (
      <div className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg">
        Connecting...
      </div>
    )
  }
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Shield size={24} className="text-green-400" />
              <span className="text-white font-bold text-xl">SafeDeGen</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Scanner
            </Link>
            <Link href="/roadmap" className="text-gray-300 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <RewardsBadge />
            <div className="flex items-center gap-4">
              <PointsDisplay />
              {mounted && (
                <WalletMultiButton 
                  className="!bg-slate-800 hover:!bg-slate-700 !border !border-slate-700 !rounded-lg !h-10 !font-semibold !px-4"
                />
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Scanner
              </Link>
              <Link 
                href="/roadmap" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/docs" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <div className="flex flex-col gap-3 pt-2">
                <RewardsBadge />
                <div className="flex items-center gap-4">
                  <PointsDisplay />
                  {mounted && (
                    <WalletMultiButton 
                      className="w-full !bg-slate-800 hover:!bg-slate-700 !border !border-slate-700 !rounded-lg !h-10 !font-semibold !px-4"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
