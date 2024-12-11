import { Shield } from 'lucide-react';
import { useExtendedQuiz } from '../../hooks/useExtendedQuiz';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';

export function ExtendedQuizView() {
  const { 
    currentQuestion, 
    totalQuestions, 
    currentIndex,
    nextQuestion,
    hasMoreQuestions 
  } = useExtendedQuiz();

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-900">
        <header className="py-3 px-4 border-b border-emerald-700/30">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-200" />
              <span className="text-emerald-100 text-sm font-medium">Extended Assessment</span>
            </div>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="text-emerald-100">
            {hasMoreQuestions ? 'Loading next question...' : 'No additional questions available.'}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-900">
      <header className="py-3 px-4 border-b border-emerald-700/30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-200" />
            <span className="text-emerald-100 text-sm font-medium">Extended Assessment</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <QuestionCard
            question={currentQuestion}
            onAnswerSubmit={nextQuestion}
          />
        </div>
      </main>

      <footer className="py-3 px-4 border-t border-emerald-700/30">
        <div className="max-w-2xl mx-auto">
          <ProgressBar
            current={currentIndex + 1}
            total={totalQuestions}
          />
        </div>
      </footer>
    </div>
  );
}