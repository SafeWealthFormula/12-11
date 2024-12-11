import { ExtendedQuestion } from '../types/quiz';
import { quickQuizToExtendedMapping } from '../data/mappings';

export function mapToExtendedQuiz(answerIds: string[]): ExtendedQuestion[] {
  return answerIds
    .flatMap((id) => quickQuizToExtendedMapping[id] || [])
    .filter(Boolean); // Remove undefined mappings
}
