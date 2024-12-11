import { Shield } from 'lucide-react';
import { useQuizStore } from '../../store/quizStore';
import { useQuestions } from '../../hooks/useQuestions';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { FlagTracker } from './FlagTracker';

export function QuizView() {
  const { currentQuestion, currentQuestionIndex, totalQuestions } = useQuestions();

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-900">
      <header className="py-3 px-4 border-b border-emerald-700/30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-200" />
            <span className="text-emerald-100 text-sm font-medium">Safe Wealth Assessment</span>
          </div>
          <span className="text-emerald-200 text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <QuestionCard question={currentQuestion} />
        </div>
        <FlagTracker />
      </main>

      <footer className="py-3 px-4 border-t border-emerald-700/30">
        <div className="max-w-2xl mx-auto">
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={totalQuestions} 
          />
        </div>
      </footer>
    </div>
  );
}