import React from 'react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-gray-400 text-sm">
              Last Updated: {lastUpdated}
            </p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
