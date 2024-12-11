import { useQuizStore } from '../../store/quizStore';
import { QuizTypeSelection } from './QuizTypeSelection';
import { QuizView } from './QuizView';
import { QuizLoadingTransition } from './QuizLoadingTransition';
import { QuizExpansionPrompt } from './QuizExpansionPrompt';
import { ExtendedQuizView } from './ExtendedQuizView';
import { LeadCapture } from './LeadCapture';
import { ResultsPage } from './ResultsPage';
import { ThankYouScreen } from './ThankYouScreen';

export function QuizFlow() {
  const view = useQuizStore((state) => state.view);

  switch (view) {
    case 'quiz-selection':
      return <QuizTypeSelection />;
    case 'quiz':
      return <QuizView />;
    case 'loading':
      return <QuizLoadingTransition />;
    case 'expansion':
      return <QuizExpansionPrompt />;
    case 'extended-quiz':
      return <ExtendedQuizView />;
    case 'lead-capture':
      return <LeadCapture />;
    case 'results':
      return <ResultsPage />;
    case 'thank-you':
      return <ThankYouScreen />;
    default:
      return null;
  }
}