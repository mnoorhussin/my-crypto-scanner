interface PillProps {
  children: React.ReactNode;
  variant?: 'verified' | 'new' | 'trending';
}

export default function Pill({ children, variant = 'verified' }: PillProps) {
  const variants = {
    verified: 'bg-green-900/50 text-green-400 border border-green-800/30',
    new: 'bg-blue-900/50 text-blue-400 border border-blue-800/30',
    trending: 'bg-purple-900/50 text-purple-400 border border-purple-800/30',
  };

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </div>
  );
}
