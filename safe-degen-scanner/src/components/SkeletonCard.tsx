export default function SkeletonCard() {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4">
      <div className="mb-3">
        <div className="h-6 bg-slate-700 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-slate-700 rounded animate-pulse w-3/4"></div>
      </div>
      
      <div className="space-y-2 text-sm mb-4">
        <div className="flex justify-between">
          <div className="h-4 bg-slate-700 rounded animate-pulse w-20"></div>
          <div className="h-4 bg-slate-700 rounded animate-pulse w-16"></div>
        </div>
        
        <div className="flex justify-between">
          <div className="h-4 bg-slate-700 rounded animate-pulse w-16"></div>
          <div className="h-4 bg-slate-700 rounded animate-pulse w-20"></div>
        </div>
        
        <div className="flex justify-between">
          <div className="h-4 bg-slate-700 rounded animate-pulse w-20"></div>
          <div className="h-4 bg-slate-700 rounded animate-pulse w-16"></div>
        </div>
      </div>

      <div className="h-10 bg-slate-700 rounded animate-pulse"></div>
    </div>
  );
}
