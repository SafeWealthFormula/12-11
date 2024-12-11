// data/mappings.ts
import { ExtendedQuestion } from '../types/quiz';
import { extendedQuizQuestions } from './extendedQuestions';

export const quickQuizToExtendedMapping: Record<string, ExtendedQuestion[]> = {
  'QQ1-A': [extendedQuizQuestions.find((q) => q.id === 'QQEP1-Green')],
  'QQ1-B': [extendedQuizQuestions.find((q) => q.id === 'QQEP1-Yellow')],
  'QQ2-C': [extendedQuizQuestions.find((q) => q.id === 'QQEP2-Red')],
  
  // Add mappings for all Quick Quiz answers
};
