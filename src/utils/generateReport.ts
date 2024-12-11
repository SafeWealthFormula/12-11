import { ReportSection } from '../types/quiz';
import { answerToReportMapping } from './reportMapping';

export function generateReport(
  userAnswers: string[],
  mapping: Record<string, ReportSection>
): string {
  const reportSections = userAnswers
    .map((id) => mapping[id]) // Map answers to report sections
    .filter(Boolean); // Remove undefined mappings

  return reportSections
    .map((section) => {
      const dynamicData = fetchDynamicData(section.requiredAnswers);
      return section.contentTemplate
        .replace('{title}', section.title)
        .replace('{dynamicData}', dynamicData);
    })
    .join('\n'); // Combine sections into a single report
}

function fetchDynamicData(answerIds: string[]): string {
  // Example logic to fetch additional data dynamically
  return `Details based on answers: ${answerIds.join(', ')}`;
}
