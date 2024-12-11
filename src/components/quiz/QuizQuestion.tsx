import { useState } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { useQuizStore } from '../../store/quizStore';
import { useQuestions } from '../../hooks/useQuestions';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';

export function QuizQuestion() {
  const { setView, currentQuestionIndex, setCurrentQuestionIndex } = useQuizStore();
  const { currentQuestion, totalQuestions } = useQuestions();

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-900">
      <header className="py-3 px-4 border-b border-emerald-700/30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-200" />
            <span className="text-emerald-100 text-sm font-medium">Financial Assessment</span>
          </div>
          <span className="text-emerald-200 text-sm">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="mb-4">
            {currentQuestionIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="text-emerald-200 hover:text-emerald-100 flex items-center gap-2 text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Question
              </button>
            )}
          </div>
          
          <QuestionCard question={currentQuestion} />
        </div>
      </main>

      <footer className="py-3 px-4 border-t border-emerald-700/30">
        <div className="max-w-2xl mx-auto">
          <ProgressBar 
            current={currentQuestionIndex + 1} 
            total={totalQuestions} 
          />
          <p className="text-center text-emerald-200 text-sm mt-2">
            {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% Complete
          </p>
        </div>
      </footer>
    </div>
  );
}