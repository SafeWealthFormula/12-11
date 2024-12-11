import { QuizStageDefinition, ExtendedQuizFlow, QuickQuizFlagMapping } from '../types/quiz';

export const quizProgression: QuizStageDefinition[] = [
  {
    stage: 'Quick Quiz',
    steps: ['QQ1', 'QQ2', 'QQ3', 'QQ4', 'QQ5', 'QQ6', 'QQ7', 'QQ8'],
  },
  {
    stage: 'Extended Quiz',
    steps: [],
    flows: [],
  },
];

export const generateExtendedQuizFlow = (flags: QuickQuizFlagMapping): ExtendedQuizFlow[] => {
  return Object.entries(flags).flatMap(([questionId, flag]) => {
    if (flag === 'Red' || flag === 'Yellow2') {
      return [
        {
          tag: `${questionId}-${flag}`,
          primaryQuestion: {
            text: `Detailed assessment for ${questionId}`,
            answerOptions: ['Option 1', 'Option 2', 'Option 3'],
          },
          secondaryQuestions: {
            0: {
              text: 'Follow-up question',
              answerOptions: ['A', 'B', 'C'],
            },
          },
        },
      ];
    }
    return [];
  });
};
