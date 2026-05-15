'use client';

import { TokenData, DexScreenerAPI } from '@/lib/dexscreener';
import { TrendingUp, TrendingDown, DollarSign, Activity, Clock } from 'lucide-react';

interface TokenCardProps {
  token: TokenData;
}

export default function TokenCard({ token }: TokenCardProps) {
  const priceChange24h = token.priceChange.h24;
  const isPositive = priceChange24h >= 0;
  const volume24h = token.volume.h24;
  const liquidity = token.liquidity.usd;
  
  const createdTime = new Date(token.pairCreatedAt * 1000);
  const hoursAgo = Math.floor((Date.now() - token.pairCreatedAt * 1000) / (1000 * 60 * 60));

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-white font-semibold text-lg">
            {token.baseToken.symbol}
          </h3>
          <p className="text-gray-400 text-sm truncate max-w-[150px]">
            {token.baseToken.name}
          </p>
        </div>
        <div className="text-right">
          <div className="text-white text-number font-semibold">
            ${DexScreenerAPI.formatPrice(token.priceUsd)}
          </div>
          <div className={`text-sm text-number flex items-center justify-end gap-1 ${
            isPositive ? 'text-positive' : 'text-negative'
          }`}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {isPositive ? '+' : ''}{priceChange24h.toFixed(2)}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <DollarSign size={14} className="text-gray-400" />
          <div>
            <div className="text-gray-400 text-xs">Liquidity</div>
            <div className="text-gray-300 text-number">
              ${DexScreenerAPI.formatMarketCap(liquidity)}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-gray-400" />
          <div>
            <div className="text-gray-400 text-xs">Volume 24h</div>
            <div className="text-gray-300 text-number">
              ${DexScreenerAPI.formatVolume(volume24h)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-gray-400">
          <Clock size={12} />
          <span>{hoursAgo}h ago</span>
        </div>
        <div className="text-gray-400">
          {token.dexId.toUpperCase()}
        </div>
      </div>

      {liquidity < 50000 && (
        <div className="mt-2 text-xs text-yellow-400 bg-yellow-900/20 border border-yellow-800/30 rounded px-2 py-1">
          ⚠️ Low liquidity
        </div>
      )}
    </div>
  );
}
