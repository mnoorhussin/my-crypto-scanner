'use client';

import { useState, useEffect } from 'react';
import { Trophy, X, Check, Users, Calendar } from 'lucide-react';

interface RewardsData {
  points: number;
  lastVisitDate: string;
  dailyVisitCompleted: boolean;
}

export default function RewardsBadge() {
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [rewardsData, setRewardsData] = useState<RewardsData>({
    points: 0,
    lastVisitDate: '',
    dailyVisitCompleted: false
  });

  // Load rewards data from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('safedegen_rewards');
    if (stored) {
      const data = JSON.parse(stored);
      setRewardsData(data);
      setPoints(data.points);
      
      // Check if it's a new day
      const today = new Date().toDateString();
      if (data.lastVisitDate !== today && !data.dailyVisitCompleted) {
        awardDailyPoints();
      }
    } else {
      // First time visitor
      awardDailyPoints();
    }
  }, []);

  const awardDailyPoints = () => {
    const today = new Date().toDateString();
    const newPoints = rewardsData.points + 10;
    const newData: RewardsData = {
      points: newPoints,
      lastVisitDate: today,
      dailyVisitCompleted: true
    };
    
    setRewardsData(newData);
    setPoints(newPoints);
    localStorage.setItem('safedegen_rewards', JSON.stringify(newData));
    
    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const referFriend = () => {
    const newPoints = rewardsData.points + 100;
    const newData: RewardsData = {
      ...rewardsData,
      points: newPoints
    };
    
    setRewardsData(newData);
    setPoints(newPoints);
    localStorage.setItem('safedegen_rewards', JSON.stringify(newData));
    
    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
    
    // Copy referral link to clipboard
    const referralLink = `${window.location.origin}?ref=USER_ID`;
    navigator.clipboard.writeText(referralLink);
    
    alert('Referral link copied to clipboard!');
  };

  return (
    <>
      {/* Rewards Badge in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className={`relative flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/50 transition-all duration-200 ${
          isAnimating ? 'scale-110 bg-green-900/30 border-green-600' : ''
        }`}
      >
        <Trophy size={16} className="text-yellow-400" />
        <span className="text-white font-semibold text-sm">
          {points.toLocaleString()} PTS
        </span>
        {isAnimating && (
          <span className="absolute -top-2 -right-2 text-green-400 font-bold text-xs animate-bounce">
            +10
          </span>
        )}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 max-w-md w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center">
                  <Trophy size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Early Access Program</h2>
                  <p className="text-sm text-gray-400">Your Points: <span className="text-yellow-400 font-bold">{points.toLocaleString()}</span></p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              Earn points for using SafeDeGen. Points measure your contribution to ecosystem.
            </p>

            {/* Actions List */}
            <div className="space-y-4 mb-6">
              <div className={`flex items-center justify-between p-4 rounded-lg border ${
                rewardsData.dailyVisitCompleted 
                  ? 'bg-green-900/20 border-green-800/30' 
                  : 'bg-slate-800/50 border-slate-700'
              }`}>
                <div className="flex items-center gap-3">
                  <Calendar size={18} className={rewardsData.dailyVisitCompleted ? 'text-green-400' : 'text-gray-400'} />
                  <div>
                    <p className="text-white font-medium">Daily Visit</p>
                    <p className="text-sm text-gray-400">Visit once per day</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold">+10 PTS</span>
                  {rewardsData.dailyVisitCompleted && <Check size={16} className="text-green-400" />}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-gray-400" />
                  <div>
                    <p className="text-white font-medium">Refer a Friend</p>
                    <p className="text-sm text-gray-400">Share your referral link</p>
                  </div>
                </div>
                <button
                  onClick={referFriend}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded transition-colors"
                >
                  +100 PTS
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <p className="text-sm text-gray-400 text-center">
                Points have no monetary value... yet. 😉
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
