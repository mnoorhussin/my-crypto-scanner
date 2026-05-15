'use client';

import { Shield, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield size={24} className="text-green-400" />
              <span className="text-white font-bold text-xl">SafeDeGen</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Institutional grade data for retail traders
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Scanner
              </Link>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Sniper Bot
              </a>
              <a href="#" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Token Audits
              </a>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                About
              </Link>
              <Link href="/roadmap" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Roadmap
              </Link>
              <Link href="/docs" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Docs
              </Link>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/legal/privacy" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/legal/disclaimer" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SafeDeGen Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-xs">Powered by Solana & DexScreener</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
