import { TrendingUp } from 'lucide-react';
import { LoadingAnimation } from '../../ui/LoadingAnimation';

export function LoadingVariantA() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-strong border border-white/10 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 mb-6 animate-pulse-gentle">
        <TrendingUp className="h-8 w-8 text-emerald-600" />
      </div>
      
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 animate-slide-up">
        Analyzing Your Responses
      </h2>
      
      <p className="text-sm sm:text-base text-gray-600 mb-6 animate-fade-in">
        Preparing your personalized wealth protection strategy...
      </p>

      <LoadingAnimation />
    </div>
  );
}