import { ExtendedQuestion } from '../types/quiz';

export function filterAndGenerateFlow(
  answerIds: string[],
  extendedQuestions: ExtendedQuestion[],
  reportMapping: Record<string, string>
): { filteredQuestions: ExtendedQuestion[]; report: string } {
  const filteredQuestions = extendedQuestions.filter((question) => {
    const { excludesIfIds, replacesIfIds } = question.condition || {};
    if (excludesIfIds?.some((id) => answerIds.includes(id))) {
      return false; // Exclude question
    }
    if (replacesIfIds?.every((id) => answerIds.includes(id))) {
      return true; // Replace question
    }
    return true; // Default include
  });

  const reportSections = answerIds.map((id) => reportMapping[id]).filter(Boolean);

  return {
    filteredQuestions,
    report: reportSections.join('\n\n'),
  };
}
