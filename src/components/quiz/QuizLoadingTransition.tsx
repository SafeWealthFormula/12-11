import { useEffect } from 'react';
import { Shield, Lock } from 'lucide-react';
import { useQuizStore } from '../../store/quizStore';
import { LoadingVariantA, LoadingVariantB, LoadingVariantC } from './loading';

export function QuizLoadingTransition() {
  const { setView, quizType, abTestVariant } = useQuizStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setView(quizType === 'extended' ? 'extended-quiz' : 'quiz');
    }, 3500);
    return () => clearTimeout(timer);
  }, [setView, quizType]);

  const renderCurrentVariant = () => {
    switch (abTestVariant) {
      case 'A':
        return <LoadingVariantA />;
      case 'B':
        return <LoadingVariantB />;
      case 'C':
        return <LoadingVariantC />;
      default:
        return <LoadingVariantA />;
    }
  };

  return (
    <div className="h-[100dvh] flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-900">
      <header className="py-3 px-4 flex-none border-b border-emerald-700/30">
        <div className="max-w-2xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-200" />
            <span className="text-emerald-100 text-sm font-medium">Safe Wealth Assessment</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {renderCurrentVariant()}
        </div>
      </main>

      <footer className="py-3 px-4 flex-none border-t border-emerald-700/30">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Lock className="h-4 w-4 text-emerald-200" />
            <span className="text-sm text-emerald-200">Secure Analysis in Progress</span>
          </div>
        </div>
      </footer>
    </div>
  );
}