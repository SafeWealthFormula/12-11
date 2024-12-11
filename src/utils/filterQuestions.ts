import { ExtendedQuestion } from '../types/quiz';

export function filterQuestions(answerIds: string[], extendedQuestions: ExtendedQuestion[]) {
  if (!answerIds || !extendedQuestions) return [];
  
  return extendedQuestions.filter((question) => {
    if (question.condition?.dependsOn) {
      return question.condition.dependsOn.every((id) => answerIds.includes(id));
    }
    return true;
  });
}
