'use client';

import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export default function PointsDisplay() {
  const { publicKey } = useWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('PointsDisplay render:', { 
    hasPublicKey: !!publicKey, 
    isModalOpen,
    publicKeyString: publicKey?.toString()
  });

  // Only show if wallet is connected
  if (!publicKey) {
    console.log('No wallet connected, returning null');
    return null;
  }

  console.log('Wallet connected, rendering component');

  return (
    <>
      {/* Simple Test Button */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '40px',
          padding: '0 12px',
          backgroundColor: 'rgba(15, 23, 42, 0.5)',
          border: '1px solid rgba(51, 65, 85, 0.5)',
          borderRadius: '8px',
          color: '#4ade80',
          cursor: 'pointer'
        }}
        onClick={() => {
          console.log('TEST BUTTON CLICKED!');
          setIsModalOpen(true);
        }}
      >
        <span style={{ fontSize: '18px' }}>🏆</span>
        <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>
          1,234 PTS
        </span>
      </div>

      {/* Simple Modal Test */}
      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => {
            console.log('BACKDROP CLICKED!');
            setIsModalOpen(false);
          }}
        >
          <div 
            style={{
              backgroundColor: '#0f172a',
              border: '2px solid #334155',
              borderRadius: '12px',
              padding: '32px',
              width: '400px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                console.log('CLOSE BUTTON CLICKED!');
                setIsModalOpen(false);
              }}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#ef4444',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '4px'
              }}
            >
              CLOSE
            </button>

            <h3 style={{ color: '#f8fafc', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
              🎉 MODAL WORKING! 🎉
            </h3>
            
            <p style={{ color: '#94a3b6', textAlign: 'center', fontSize: '16px' }}>
              If you can see this, the modal is working perfectly!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
