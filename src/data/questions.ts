import { Question } from '../types/quiz';

export const quickQuizQuestions: Question[] = [
  {
    id: 'QQ1',
    text: 'If your income stopped tomorrow, how long could you maintain your current lifestyle?',
    type: 'single',
    flagType: 'Income Resilience',
    answers: [
      { id: 'QQ1A1', text: 'More than 6 months—I have a solid safety net', flag: 'Green', nextStep: 'QQEP1-Green' },
      { id: 'QQ1A2', text: '3–6 months—I\'d feel some strain but manage', flag: 'Yellow 1', nextStep: 'QQEP1-Yellow1' },
      { id: 'QQ1A3', text: '1–3 months—I\'d need to make big adjustments', flag: 'Yellow 2', nextStep: 'QQEP1-Yellow2' },
      { id: 'QQ1A4', text: 'Less than 1 month—I\'d need immediate help', flag: 'Red', nextStep: 'QQEP1-Red' }
    ]
  },
  {
    id: 'QQ2',
    text: 'How would you handle a $5,000 unexpected expense today?',
    type: 'single',
    flagType: 'Emergency Preparedness',
    answers: [
      { id: 'QQ2A1', text: 'I\'d cover it easily with savings', flag: 'Green', nextStep: 'QQEP2-Green' },
      { id: 'QQ2A2', text: 'I\'d manage but feel the pinch', flag: 'Yellow 1', nextStep: 'QQEP2-Yellow1' },
      { id: 'QQ2A3', text: 'I\'d need to rely on credit or help from others', flag: 'Yellow 2', nextStep: 'QQEP2-Yellow2' },
      { id: 'QQ2A4', text: 'I don\'t know how I\'d handle it right now', flag: 'Red', nextStep: 'QQEP2-Red' }
    ]
  }
];

export const standardQuizQuestions: Question[] = [
  {
    id: 'SQQ1',
    text: 'What concerns you most about your finances? (Select up to 2.)',
    type: 'multiple',
    flagType: 'Financial Concerns',
    maxSelections: 2,
    answers: [
      { id: 'SQQ1A1', text: 'Taxes', flag: 'Yellow 1', nextStep: 'QQEP6-Yellow1' },
      { id: 'SQQ1A2', text: 'Inflation', flag: 'Yellow 2', nextStep: 'QQEP3-Yellow2' },
      { id: 'SQQ1A3', text: 'Market volatility', flag: 'Yellow 2', nextStep: 'QQEP5-Yellow2' },
      { id: 'SQQ1A4', text: 'Outliving my savings', flag: 'Red', nextStep: 'QQEP7-Red' },
      { id: 'SQQ1A5', text: 'Protecting my family/legacy', flag: 'Yellow 1', nextStep: 'QQEP8-Yellow1' }
    ]
  }
];

export const qqepExtendedQuiz = [
  {
    id: 'QQEP1-Green',
    type: 'multiple',
    subQuestions: [
      {
        type: 'primary',
        text: 'How do you plan to optimize your safety net to grow your wealth long term?',
        answers: [
          { id: 'QQEP1-Green-p1', text: 'I\'m exploring ways to balance liquidity with higher returns on savings.', flag: 'Green' },
          { id: 'QQEP1-Green-p2', text: 'I\'m focused on aligning my safety net with my future retirement goals.', flag: 'Green' },
          { id: 'QQEP1-Green-p3', text: 'I prefer a highly secure safety net and don\'t feel the need to optimize further.', flag: 'Green' },
          { id: 'QQEP1-Green-p4', text: 'I haven\'t thought about optimizing my safety net beyond its current setup.', flag: 'Green' }
        ]
      },
      {
        type: 'secondary',
        text: 'What\'s the most important feature of your financial safety net?',
        answers: [
          { id: 'QQEP1-Green-s1', text: 'Ensuring it grows steadily over time while remaining secure.', flag: 'Green' },
          { id: 'QQEP1-Green-s2', text: 'Maintaining easy access for emergencies without compromising growth.', flag: 'Green' },
          { id: 'QQEP1-Green-s3', text: 'Minimizing risks while exploring new opportunities for diversification.', flag: 'Green' },
          { id: 'QQEP1-Green-s4', text: 'My savings doesn\'t do any of those things.', flag: 'Green' }
        ]
      }
    ]
  }
];