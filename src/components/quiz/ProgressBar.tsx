interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full h-1 bg-emerald-900/50 rounded-full overflow-hidden">
      <div 
        className="h-full bg-emerald-300 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}