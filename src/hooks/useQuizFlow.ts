import { useState, useCallback } from 'react';
import { QuizStage, UserAnswer } from '../types/quiz';
import { generateReport } from '../utils/generateReport';
import { answerToReportMapping } from '../utils/reportMapping';

export const useQuizFlow = () => {
  const [stage, setStage] = useState<QuizStage>(QuizStage.QuickQuiz);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [report, setReport] = useState<string | null>(null);

  const processAnswer = useCallback((answer: UserAnswer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (stage === QuizStage.ExtendedQuiz && newAnswers.length >= 8) {
      const generatedReport = generateReport(
        newAnswers.map((a) => a.answerId),
        answerToReportMapping
      );
      setReport(generatedReport);
      setStage(QuizStage.Report);
    }
  }, [answers, stage]);

  return {
    stage,
    report,
    processAnswer,
    reset: () => {
      setStage(QuizStage.QuickQuiz);
      setAnswers([]);
      setReport(null);
    },
  };
};
