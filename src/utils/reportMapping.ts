import { ReportSection } from '../types/quiz';

export const answerToReportMapping: Record<string, ReportSection> = {
  'QQ1A1': {
    id: 'section-1',
    title: 'Emergency Preparedness',
    contentTemplate: `
      <h1>{title}</h1>
      <p>Your preparedness level is based on your input: {dynamicData}</p>
    `,
    requiredAnswers: ['QQ1A1', 'QQ1A2'],
  },
  'QQ1A2': {
    id: 'section-2',
    title: 'Savings Strategy',
    contentTemplate: `
      <h1>{title}</h1>
      <p>Recommended strategies based on your input: {dynamicData}</p>
    `,
    requiredAnswers: ['QQ2A1', 'QQ2A2'],
  },
  // Add more mappings as needed
};
