import { useQuizStore } from '../../store/quizStore';
import { QuizFlag } from '../../types/quiz';

export function FlagTracker() {
  const userAnswers = useQuizStore((state) => state.userAnswers);
  
  const flagCounts = userAnswers.reduce((acc, answer) => {
    if (answer.flag) {
      acc[answer.flag] = (acc[answer.flag] || 0) + 1;
    }
    return acc;
  }, {} as Record<QuizFlag, number>);

  const flagColors = {
    'Green': 'bg-green-500',
    'Yellow 1': 'bg-yellow-400',
    'Yellow 2': 'bg-yellow-600',
    'Red': 'bg-red-500'
  };

  return (
    <div className="fixed top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 min-w-[200px]">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">Flag Progress</h3>
      <div className="space-y-2">
        {Object.entries(flagColors).map(([flag, color]) => (
          <div key={flag} className="flex items-center justify-between">
            <span className="text-xs text-gray-600">{flag}</span>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${color}`}></span>
              <span className="text-xs font-medium">{flagCounts[flag as QuizFlag] || 0}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Questions</span>
          <span className="text-xs font-medium">{userAnswers.length}/8</span>
        </div>
      </div>
    </div>
  );
}