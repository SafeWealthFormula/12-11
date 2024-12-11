import { useState, useEffect, useCallback } from 'react';
import { useQuizStore } from '../store/quizStore';
import { ExtendedQuestion } from '../types/quiz';
import { qqepExtendedQuiz } from '../data/questions';
import { filterQuestions } from '../utils/filterQuestions';

export function useExtendedQuiz() {
  const { userAnswers, currentQuestionIndex, setCurrentQuestionIndex } = useQuizStore();
  const [filteredQuestions, setFilteredQuestions] = useState<ExtendedQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<ExtendedQuestion | null>(null);

  useEffect(() => {
    const filtered = filterQuestions(
      userAnswers.map((a) => a.answerId).flat(),
      qqepExtendedQuiz
    );
    setFilteredQuestions(filtered);
  }, [userAnswers]);

  useEffect(() => {
    setCurrentQuestion(filteredQuestions[currentQuestionIndex] || null);
  }, [filteredQuestions, currentQuestionIndex]);

  const nextQuestion = useCallback(() => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }, [currentQuestionIndex, setCurrentQuestionIndex]);

  return {
    currentQuestion,
    totalQuestions: filteredQuestions.length,
    currentIndex: currentQuestionIndex,
    nextQuestion,
    hasMoreQuestions: currentQuestionIndex < filteredQuestions.length
  };
}