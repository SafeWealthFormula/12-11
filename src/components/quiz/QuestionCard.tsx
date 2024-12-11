import { useState } from 'react';
import { Question, ExtendedQuestion } from '../../types/quiz';
import { useQuizStore } from '../../store/quizStore';

interface QuestionCardProps {
  question: Question | ExtendedQuestion;
  onAnswerSubmit?: () => void;
}

export function QuestionCard({ question, onAnswerSubmit }: QuestionCardProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { setAnswer } = useQuizStore();

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers((prev) =>
      prev.includes(answerId) ? prev.filter((id) => id !== answerId) : [...prev, answerId]
    );
    setError(null);
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) {
      setError('Please select at least one option');
      return;
    }

    const answer = {
      questionId: question.id,
      answerId: selectedAnswers,
      flag: 'subQuestions' in question ? question.subQuestions[0].answers.find(a => selectedAnswers.includes(a.id))?.flag : 
        question.answers.find(a => selectedAnswers.includes(a.id))?.flag
    };

    setAnswer(answer);
    setSelectedAnswers([]);
    if (onAnswerSubmit) onAnswerSubmit();
  };

  // Handle both regular and extended questions
  const answers = 'subQuestions' in question ? 
    question.subQuestions[0].answers :
    question.answers;

  const questionText = 'subQuestions' in question ?
    question.subQuestions[0].text :
    question.text;

  return (
    <div className="bg-white rounded-xl p-6 shadow-strong">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">{questionText}</h2>
      
      <div className="space-y-3">
        {answers.map((answer) => (
          <button
            key={answer.id}
            onClick={() => handleAnswerSelect(answer.id)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedAnswers.includes(answer.id)
                ? 'border-emerald-600 bg-emerald-50'
                : 'border-gray-200 hover:border-emerald-200'
            }`}
          >
            <span className="text-gray-800">{answer.text}</span>
          </button>
        ))}
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Next Question
      </button>
    </div>
  );
}