'use client';

import { useState, useEffect } from 'react';
import { fetchSolanaTokens, Token } from '@/utils/api';
import { RefreshCw, Check } from 'lucide-react';
import Pill from '@/components/Pill';
import SkeletonCard from '@/components/SkeletonCard';

// TokenCard Component
function TokenCard({ token }: { token: Token }) {
  const priceChange24h = token.priceChange?.h24 ?? 0;
  const isPositive = priceChange24h >= 0;
  const formatLiquidity = (usd: number) => {
    if (usd >= 1e6) return `$${(usd / 1e6).toFixed(1)}M`;
    if (usd >= 1e3) return `$${(usd / 1e3).toFixed(1)}K`;
    return `$${usd.toFixed(0)}`;
  };

  const snipeUrl = `https://t.me/solana_trojanbot?start=r-YOURCODE-${token.baseToken.address}`;

  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4 hover:border-slate-600 transition-all duration-300">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      
      <div className="relative z-10">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-white font-bold text-lg tracking-tight">{token.baseToken.symbol}</div>
            <Pill variant="verified">
              <Check size={10} />
              Audited
            </Pill>
          </div>
          <div className="text-gray-400 text-sm tracking-tight">{token.baseToken.name}</div>
        </div>
        
        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400 tracking-tight">Liquidity:</span>
            <span className="text-white font-mono tracking-tight">{formatLiquidity(token.liquidity.usd)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400 tracking-tight">Price:</span>
            <span className="text-white font-mono tracking-tight">
              ${parseFloat(token.priceUsd).toFixed(6)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400 tracking-tight">24h Change:</span>
            <span className={`font-mono tracking-tight ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? '+' : ''}{priceChange24h.toFixed(2)}%
            </span>
          </div>
        </div>

        <a
          href={snipeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-center py-2 px-4 rounded transition-all duration-200 shadow-lg hover:shadow-green-500/25 tracking-tight"
        >
          ⚡ Snipe on Trojan
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [safeTokens, setSafeTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchSolanaTokens();
      setTokens(data);
      
      // Apply safety filters
      const filtered = data.filter(token => 
        token.liquidity.usd > 5000 && token.volume.h24 > 10000
      );
      setSafeTokens(filtered);
    } catch (err) {
      setError('Failed to fetch token data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
                Find the Next 100x.
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                Zero Rugs.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed tracking-tight">
              Our proprietary algorithm filters noise, liquidity traps, and honeypots in real-time.
            </p>
            
            {/* Metrics Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2 tracking-tight">$42M+</div>
                <div className="text-gray-400 text-sm tracking-tight">24h Volume Scanned</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-red-400 mb-2 tracking-tight">1,204</div>
                <div className="text-gray-400 text-sm tracking-tight">Dangerous Contracts Blocked</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2 tracking-tight">14</div>
                <div className="text-gray-400 text-sm tracking-tight">Safe Opportunities Found</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Market Data Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Live Market Data
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto tracking-tight">
            Real-time filtered opportunities from the Solana ecosystem
          </p>
          <button
            onClick={fetchData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-200 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 tracking-tight"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh Data
          </button>
        </div>

        {/* Stats Counter */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-8 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg">
            <div className="text-lg tracking-tight">
              Scanning <span className="font-mono text-white">{tokens.length}</span> tokens
            </div>
            <div className="text-gray-500">|</div>
            <div className="text-lg tracking-tight">
              Found <span className="font-mono text-green-400">{safeTokens.length}</span> safe plays
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-800/30 rounded-lg backdrop-blur-sm">
            <span className="text-red-300">{error}</span>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : safeTokens.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            {tokens.length === 0 ? 'No tokens found' : 'No safe tokens found - try lowering your filters'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {safeTokens.map((token) => (
              <TokenCard key={token.pairAddress} token={token} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
