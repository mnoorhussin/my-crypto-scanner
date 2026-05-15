'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';

interface UserPointsData {
  points: number;
  lastVisitDate: string;
  dailyVisitCompleted: boolean;
}

export function useUserPoints() {
  const { publicKey } = useWallet();
  const [points, setPoints] = useState(0);
  const [userPointsData, setUserPointsData] = useState<UserPointsData>({
    points: 0,
    lastVisitDate: '',
    dailyVisitCompleted: false
  });

  useEffect(() => {
    if (!publicKey) {
      // Wallet disconnected - reset points
      setPoints(0);
      setUserPointsData({
        points: 0,
        lastVisitDate: '',
        dailyVisitCompleted: false
      });
      return;
    }

    // Generate unique key for this wallet
    const storageKey = `safe_degen_points_${publicKey.toString()}`;
    
    // Load existing data
    const stored = localStorage.getItem(storageKey);
    let data: UserPointsData;

    if (stored) {
      data = JSON.parse(stored);
      setUserPointsData(data);
      setPoints(data.points);
      
      // Check if it's a new day for daily bonus
      const today = new Date().toDateString();
      if (data.lastVisitDate !== today && !data.dailyVisitCompleted) {
        addPoints(10, data);
      }
    } else {
      // First time connecting with this wallet
      data = {
        points: 100, // Welcome bonus
        lastVisitDate: new Date().toDateString(),
        dailyVisitCompleted: true
      };
      localStorage.setItem(storageKey, JSON.stringify(data));
      setUserPointsData(data);
      setPoints(data.points);
    }
  }, [publicKey]);

  const addPoints = (amount: number, currentData?: UserPointsData) => {
    if (!publicKey) return;

    const data = currentData || userPointsData;
    const newData: UserPointsData = {
      ...data,
      points: data.points + amount
    };

    const storageKey = `safe_degen_points_${publicKey.toString()}`;
    localStorage.setItem(storageKey, JSON.stringify(newData));
    setUserPointsData(newData);
    setPoints(newData.points);
  };

  return {
    points,
    addPoints
  };
}
