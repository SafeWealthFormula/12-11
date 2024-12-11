import { LineChart } from 'lucide-react';
import { LoadingAnimation } from '../../ui/LoadingAnimation';

export function LoadingVariantB() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-strong border border-white/10 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-6">
        <div className="relative">
          <LineChart className="h-8 w-8 text-emerald-600 animate-pulse-gentle" />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/0 via-emerald-100/30 to-emerald-100/0 animate-shimmer" />
        </div>
      </div>
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 animate-slide-up">
        Calculating Your Safe Wealth Score
      </h2>
      
      <p className="text-sm sm:text-base text-gray-600 mb-6 animate-fade-in">
        Identifying opportunities to enhance your financial security...
      </p>

      <LoadingAnimation />
    </div>
  );
}