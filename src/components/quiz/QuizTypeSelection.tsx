import { ArrowRight, Sparkles } from 'lucide-react';
import { useQuizStore } from '../../store/quizStore';
import { QuizType } from '../../types/quiz';

export function QuizTypeSelection() {
  const { setQuizType, setView, setQQEPFlag, clearAnswers } = useQuizStore();

  const handleQuizTypeSelection = (type: QuizType) => {
    clearAnswers();
    setQuizType(type);
    setView('quiz');
  };

  const handleExtendedQuizPreview = () => {
    clearAnswers();
    setQuizType('extended');
    setView('extended-quiz');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-800 to-emerald-900">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Choose Your Assessment Type
            </h1>
            <p className="text-sm text-emerald-100">
              Select the quiz that best fits your schedule
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-5 rounded-lg shadow-strong">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Quiz</h3>
              <p className="text-sm text-gray-600 mb-4">Fast and easy—just 8 questions</p>
              <button 
                onClick={() => handleQuizTypeSelection('quick')}
                className="group w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center"
              >
                Start Quick Quiz
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-strong">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Standard Quiz</h3>
              <p className="text-sm text-gray-600 mb-4">In-depth insights with 12 questions</p>
              <button 
                onClick={() => handleQuizTypeSelection('standard')}
                className="group w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center"
              >
                Start Standard Quiz
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-emerald-700/30 backdrop-blur-sm p-4 rounded-lg border border-emerald-600/20">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-emerald-100 font-medium mb-1 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Preview Extended Questions
                </h3>
                <p className="text-sm text-emerald-200/80">
                  View all extended quiz questions in sequence
                </p>
              </div>
              <button
                onClick={handleExtendedQuizPreview}
                className="flex-shrink-0 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors text-sm"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}