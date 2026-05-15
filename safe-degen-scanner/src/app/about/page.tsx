'use client';

import { Shield, Search, Lock, Users, BarChart, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 text-transparent bg-clip-text">
                Our Mission
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed tracking-tight">
              SafeDeGen was founded to democratize institutional-grade security data for the Solana ecosystem. 
              We believe alpha shouldn't come at the cost of security.
            </p>
          </div>
        </div>
      </div>

      {/* The Technology Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            The Technology
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto tracking-tight">
            Cutting-edge infrastructure designed for the modern DeFi landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-8 hover:border-slate-600 transition-colors">
            <div className="mb-6">
              <Search size={32} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              On-Chain Forensics
            </h3>
            <p className="text-gray-400 leading-relaxed tracking-tight">
              Real-time analysis of contract ownership and mint authority. Our proprietary scanning engine 
              identifies centralized control vectors before they become exploitable.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-8 hover:border-slate-600 transition-colors">
            <div className="mb-6">
              <Lock size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              Liquidity Locking
            </h3>
            <p className="text-gray-400 leading-relaxed tracking-tight">
              Automated verification of LP burn and lock durations. We monitor liquidity pool mechanics 
              to ensure sustainable tokenomics and prevent rug pulls.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-8 hover:border-slate-600 transition-colors">
            <div className="mb-6">
              <BarChart size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
              Sentiment Analysis
            </h3>
            <p className="text-gray-400 leading-relaxed tracking-tight">
              Social signal processing to detect bot-driven hype. Our ML models analyze community 
              engagement patterns to identify organic growth versus artificial manipulation.
            </p>
          </div>
        </div>
      </div>

      {/* The Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            The Team
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto tracking-tight">
            World-class expertise from the forefront of blockchain innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Team Role 1 */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              Core Engineering
            </h3>
            <p className="text-gray-400 leading-relaxed tracking-tight">
              Ex-Coinbase & Solana Labs developers with deep protocol expertise and 
              production-scale systems experience.
            </p>
          </div>

          {/* Team Role 2 */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center">
                <BarChart size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              Research
            </h3>
            <p className="text-gray-400 leading-relaxed tracking-tight">
              DeFi natives with 5+ years in market mechanics. We've traded through 
              multiple bull and bear cycles.
            </p>
          </div>

          {/* Team Role 3 */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center">
                <CheckCircle size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              Security
            </h3>
            <p className="text-gray-400 leading-relaxed tracking-tight">
              Audited by top firms. Our security framework has protected over 
              $2B in assets across major DeFi protocols.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-800 rounded-lg p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Join the Revolution
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto tracking-tight">
              Experience institutional-grade security without the institutional barriers. 
              Start scanning safer opportunities today.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-200 shadow-lg hover:shadow-green-500/25 tracking-tight">
              Launch Scanner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
