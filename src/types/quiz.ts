// Quiz Types
export type QuizType = 'quick' | 'standard' | 'extended' | null;
export type QuizFlagCategory = 'Emergency' | 'Savings' | 'Legacy'; // New categorization

// Views in the Quiz Flow
export type QuizView =
  | 'landing'
  | 'quiz-selection'
  | 'quiz'
  | 'expansion'
  | 'loading'
  | 'extended-quiz'
  | 'lead-capture'
  | 'results'
  | 'thank-you';

// Flags for Quiz Responses
export type QuizFlag = 'Green' | 'Yellow 1' | 'Yellow 2' | 'Red';

// Base Question Type
export interface Question {
  id: string; // Unique question identifier
  text: string; // Question text
  type: 'single' | 'multiple'; // Question type
  maxSelections?: number; // Optional: Limit for multiple selections
  answers: Answer[]; // Array of answers
  flag?: QuizFlag; // Optional: Associated flag
  flagType?: QuizFlagCategory; // Optional: Additional categorization
  parentId?: string; // Optional: Hierarchical dependency
}

// Refactored Answer Type
export interface Answer {
  id: string; // Unique identifier for the answer
  text: string; // Answer text
  flag?: QuizFlag; // Optional flag for categorization
  metadata?: Record<string, any>; // Optional: Additional data for extensibility
}

// User's Answer
export interface UserAnswer {
  questionId: string; // The question answered
  answerId: string[]; // Selected answer(s)
}

// Refactored ExtendedQuestion Type
export interface ExtendedQuestion {
  id: string; // Unique identifier for the extended question set
  type: 'single' | 'multiple'; // Question type
  subQuestions: Array<{
    type: 'primary' | 'secondary' | 'additional'; // Type of sub-question
    text: string; // Sub-question text
    answers: Answer[]; // Available answers
    isRequired?: boolean; // Optional: Mark as mandatory
    order?: number; // Optional: Explicit order for rendering
  }>; // Consolidated all sub-questions
  metadata?: Record<string, any>; // Optional: Additional metadata

}

// Quiz Progress Tracking
export interface QuizProgress {
  currentTag: string; // Current section/tag being answered
  currentQuestionType: 'primary' | 'secondary' | 'additional'; // Type of current question
  completedTags: string[]; // List of completed tags
}

// Quiz State Management
export interface QuizState {
  view: QuizView; // Current view in the quiz flow
  quizType: QuizType; // Type of quiz being taken
  currentQuestionIndex: number; // Index of the current question
  userAnswers: UserAnswer[]; // Array of user answers
  currentTagId: string | null; // Current extended quiz flag
  abTestVariant: 'A' | 'B' | 'C'; // Variant for A/B testing
  isKeyboardNavigation: boolean; // Indicates if keyboard navigation is enabled
  quizProgress: QuizProgress; // Progress tracking information
}
