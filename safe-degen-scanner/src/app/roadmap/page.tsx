'use client';

import { useState } from 'react';
import { CheckCircle, Clock, Calendar, Trophy, Users, Search, Filter, Wallet, Gift, Eye, Alert, BookOpen, MessageSquare } from 'lucide-react';

interface Phase {
  title: string;
  status: 'completed' | 'in-progress' | 'planned' | 'future';
  features: string[];
  icon: React.ReactNode;
}

export default function Roadmap() {
  const phases: Phase[] = [
    {
      title: 'Foundation',
      status: 'completed',
      features: [
        'Live Solana pair scanner (DexScreener)',
        'Liquidity + volume safety filters',
        'Polished dark UI + loading skeletons'
      ],
      icon: <Search size={20} />
    },
    {
      title: 'Expansion',
      status: 'in-progress',
      features: [
        'Wallet connect (Phantom/Solflare)',
        'Early Access Points (welcome bonus + daily visit)',
        'Rewards modal + basic leaderboard placeholder (coming soon)'
      ],
      icon: <Wallet size={20} />
    },
    {
      title: 'Intelligence',
      status: 'planned',
      features: [
        'Wallet Watcher (portfolio page)',
        'Advanced risk checks (mint/freeze authority, LP lock)',
        'Token detail pages + alerting'
      ],
      icon: <Eye size={20} />
    },
    {
      title: 'Ecosystem',
      status: 'future',
      features: [
        'Public docs + changelog',
        'Community feedback program',
        'Optional premium features (only if demand)'
      ],
      icon: <Users size={20} />
    }
  ];

  const getStatusBadge = (status: Phase['status']) => {
    const badges = {
      'completed': 'bg-green-900/50 text-green-400 border-green-800/30',
      'in-progress': 'bg-blue-900/50 text-blue-400 border-blue-800/30 animate-pulse',
      'planned': 'bg-gray-800/50 text-gray-400 border-gray-700/30',
      'future': 'bg-gray-800/50 text-gray-500 border-gray-700/30'
    };

    const labels = {
      'completed': 'Completed',
      'in-progress': 'In Progress',
      'planned': 'Planned',
      'future': 'Future'
    };

    const icons = {
      'completed': <CheckCircle size={10} />,
      'in-progress': <Clock size={10} />,
      'planned': <Calendar size={10} />,
      'future': <Trophy size={10} />
    };

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${badges[status]}`}>
        {icons[status]}
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Product Roadmap
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto tracking-tight">
            Our journey to building the most trusted token analysis platform in DeFi
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Calendar size={16} />
            <span className="text-sm">Updated December 2024</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-700"></div>

            {/* Phase Cards */}
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={phase.title} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-700 z-10 ${
                    phase.status === 'completed' ? 'bg-green-400' :
                    phase.status === 'in-progress' ? 'bg-blue-400 animate-pulse' :
                    phase.status === 'planned' ? 'bg-gray-400' : 'bg-gray-600'
                  }`}></div>

                  {/* Phase Card */}
                  <div className={`ml-auto mr-auto ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0 md:pr-12' : 'md:ml-auto md:mr-0 md:pl-12'
                  } md:w-1/2`}>
                    <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 ${
                      phase.status === 'in-progress' 
                        ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                        : 'border-slate-800 hover:border-slate-600'
                    }`}>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            phase.status === 'completed' ? 'bg-green-900/50' :
                            phase.status === 'in-progress' ? 'bg-blue-900/50' :
                            phase.status === 'planned' ? 'bg-gray-800/50' : 'bg-gray-800/50'
                          }`}>
                            {phase.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              Phase {index + 1}: {phase.title}
                            </h3>
                          </div>
                        </div>
                        {getStatusBadge(phase.status)}
                      </div>

                      {/* Features */}
                      <ul className="space-y-2">
                        {phase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              phase.status === 'completed' ? 'bg-green-400' :
                              phase.status === 'in-progress' ? 'bg-blue-400' :
                              phase.status === 'planned' ? 'bg-gray-400' : 'bg-gray-600'
                            }`}></div>
                            <span className="text-gray-300 text-sm leading-relaxed tracking-tight">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-800 rounded-lg p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Join Our Journey
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto tracking-tight">
              Be part of building the most trusted token analysis platform. Connect your wallet and start earning points today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-200 shadow-lg hover:shadow-green-500/25 tracking-tight">
                <Search size={16} />
                Start Scanning
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 tracking-tight">
                <MessageSquare size={16} />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
