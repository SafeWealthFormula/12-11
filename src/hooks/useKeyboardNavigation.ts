import { useEffect } from 'react';
import { useQuizStore } from '../store/quizStore';
import { qqepExtendedQuiz } from '../data/extendedQuestions';

const viewOrder = [
  'landing',
  'quiz-selection',
  'quiz',
  'loading',
  'expansion',
  'extended-quiz',
  'lead-capture',
  'results',
  'thank-you'
] as const;

const flagOrder = ['Green', 'Yellow 1', 'Yellow 2', 'Red'] as const;

export function useKeyboardNavigation() {
  const { 
    view, 
    setView, 
    quizType, 
    setQuizType,
    setKeyboardNavigation,
    cycleVariant,
    currentQQEPFlag,
    setQQEPFlag
  } = useQuizStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeyboardNavigation(true);

      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        const currentIndex = viewOrder.indexOf(view);
        
        if (currentIndex < viewOrder.length - 1) {
          if (view === 'quiz-selection' && !quizType) {
            setQuizType('quick');
          } else if (view === 'expansion') {
            setQuizType('extended');
            setView('loading');
          } else if (view === 'extended-quiz') {
            // In extended quiz, cycle through flags
            if (currentQQEPFlag) {
              const currentFlagIndex = flagOrder.indexOf(currentQQEPFlag as any);
              if (currentFlagIndex < flagOrder.length - 1) {
                setQQEPFlag(flagOrder[currentFlagIndex + 1]);
              } else {
                setView('lead-capture');
              }
            } else {
              setQQEPFlag(flagOrder[0]);
            }
          } else {
            const nextView = viewOrder[currentIndex + 1];
            setView(nextView);
          }
        }
      } 
      else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        const currentIndex = viewOrder.indexOf(view);
        
        if (currentIndex > 0) {
          if (view === 'extended-quiz' && currentQQEPFlag) {
            const currentFlagIndex = flagOrder.indexOf(currentQQEPFlag as any);
            if (currentFlagIndex > 0) {
              setQQEPFlag(flagOrder[currentFlagIndex - 1]);
            } else {
              setView('expansion');
            }
          } else {
            const prevView = viewOrder[currentIndex - 1];
            setView(prevView);
          }
        }
      }
      else if (e.key === '*') {
        e.preventDefault();
        cycleVariant();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [view, setView, quizType, setQuizType, setKeyboardNavigation, cycleVariant, currentQQEPFlag, setQQEPFlag]);
}