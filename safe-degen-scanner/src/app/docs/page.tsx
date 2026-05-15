'use client';

import { useState } from 'react';
import { BookOpen, Shield, Zap, Menu, X, CheckCircle } from 'lucide-react';
import TokenCard from '@/components/TokenCard';
import Pill from '@/components/Pill';

export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarItems = [
    { id: 'getting-started', label: 'Getting Started', icon: <BookOpen size={16} /> },
    { id: 'safety-score', label: 'Safety Score', icon: <Shield size={16} /> },
    { id: 'snipping-guide', label: 'Snipping Guide', icon: <Zap size={16} /> }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                How to find safe plays on SafeDeGen
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Follow our proven methodology to identify high-potential tokens while minimizing risk.
              </p>
            </div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">The Scanner</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our scanner filters thousands of new pairs every minute. We automatically hide tokens 
                  with liquidity under <span className="font-mono text-blue-400">$1,000</span> to filter out instant scams.
                </p>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-sm text-gray-400 font-mono">
                    &gt; Filter: liquidity_usd &gt; 1000<br/>
                    &gt; Filter: volume_h24 &gt; 10000<br/>
                    &gt; Result: Safe tokens only
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Analyzing a Token</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Look for the <span className="font-mono text-green-400">'Verified'</span> badge. This indicates the 
                  contract has <span className="font-mono text-blue-400">Renounced Ownership</span> and 
                  <span className="font-mono text-blue-400">Burned Liquidity</span>.
                </p>
                
                {/* Visual Example */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                  <p className="text-sm text-gray-400 mb-4 font-mono">Example Token Card:</p>
                  <div className="max-w-sm mx-auto">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4">
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-white font-bold text-lg">TOKEN</div>
                          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-900/50 text-green-400 border border-green-800/30">
                            <CheckCircle size={10} />
                            Audited
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm">Token Name</div>
                      </div>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Liquidity:</span>
                          <span className="text-white font-mono">$25.5K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Price:</span>
                          <span className="text-white font-mono">$0.000142</span>
                        </div>
                      </div>
                      <div className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-center py-2 px-4 rounded text-sm">
                        ⚡ Snipe on Trojan
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Executing the Trade</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Click the <span className="font-mono text-green-400">'⚡ Snipe on Trojan'</span> button to instantly 
                  load the pair in our partner execution bots. Speed is key in Solana trading.
                </p>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-sm text-gray-400 font-mono">
                    &gt; Click: Snipe on Trojan<br/>
                    &gt; Redirect: t.me/solana_trojanbot<br/>
                    &gt; Execute: Instant trade execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'safety-score':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Understanding Safety Scores
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our proprietary safety algorithm analyzes multiple factors to determine token safety.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Liquidity Analysis</h3>
                <p className="text-gray-300 mb-3">
                  Minimum <span className="font-mono text-blue-400">$5,000</span> liquidity required
                </p>
                <div className="bg-slate-900/50 border border-slate-700 rounded p-3">
                  <p className="text-sm text-gray-400 font-mono">
                    if (liquidity_usd &lt; 5000) {`{ reject() }`}
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Volume Requirements</h3>
                <p className="text-gray-300 mb-3">
                  Minimum <span className="font-mono text-blue-400">$10,000</span> 24h volume
                </p>
                <div className="bg-slate-900/50 border border-slate-700 rounded p-3">
                  <p className="text-sm text-gray-400 font-mono">
                    if (volume_h24 &lt; 10000) {`{ reject() }`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'snipping-guide':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Advanced Sniping Techniques
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Master the art of timing and execution for maximum profits.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Speed Matters</h3>
                <p className="text-gray-300">
                  In Solana trading, milliseconds matter. Our integration with Trojan bots ensures 
                  sub-second execution times.
                </p>
              </div>

              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">Entry Points</h3>
                <p className="text-gray-300">
                  Look for tokens with: <span className="font-mono text-blue-400">verified contracts</span>, 
                  <span className="font-mono text-blue-400">burned liquidity</span>, and 
                  <span className="font-mono text-blue-400">organic volume</span>.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="lg:sticky lg:top-8">
              {/* Mobile Menu Toggle */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg w-full"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  <span className="text-white">Documentation Menu</span>
                </button>
              </div>

              {/* Sidebar Navigation */}
              <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4`}>
                <h3 className="text-white font-semibold mb-4 tracking-tight">Documentation</h3>
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === item.id
                          ? 'bg-blue-900/50 text-blue-400 border border-blue-800/30'
                          : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {item.icon}
                      <span className="text-sm tracking-tight">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-800 rounded-lg p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
