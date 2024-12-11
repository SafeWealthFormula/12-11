import { create } from 'zustand';
import { QuizType, QuizView, UserAnswer, QuizFlag } from '../types/quiz';

interface QuizState {
  view: QuizView;
  quizType: QuizType;
  currentQuestionIndex: number;
  userAnswers: (UserAnswer & { flag?: QuizFlag })[];
  currentTagId: string | null; // Updated from `currentQQEPFlag`
  abTestVariant: 'A' | 'B' | 'C';
  isKeyboardNavigation: boolean;
  setView: (view: QuizView) => void;
  setQuizType: (type: QuizType) => void;
  setAnswer: (answer: UserAnswer) => void;
  setCurrentQuestionIndex: (index: number) => void;
  nextQuestion: () => void;
  startQuiz: () => void;
  cycleVariant: () => void;
  setKeyboardNavigation: (value: boolean) => void;
  setCurrentTagID: (tagId: string | null) => void; // Updated from `setQQEPFlag`
  resetQuiz: () => void;
  clearAnswers: () => void;
}

const initialState = {
  view: 'landing' as QuizView,
  quizType: null,
  currentQuestionIndex: 0,
  userAnswers: [],
  currentTagId: null,
  abTestVariant: 'A',
  isKeyboardNavigation: false,
};

export const useQuizStore = create<QuizState>((set) => ({
  ...initialState,

  setView: (view) => set({ view }),
  
  setQuizType: (type) => set({ 
    quizType: type,
    currentQuestionIndex: 0,
    userAnswers: [],
    currentTagId: null, // Reset `currentTagId` on quiz type change
  }),

  setAnswer: (answer) => set((state) => ({
    userAnswers: [...state.userAnswers, answer]
  })),

  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  nextQuestion: () => set((state) => {
    const nextIndex = state.currentQuestionIndex + 1;
    
    if (state.quizType === 'quick') {
      if (nextIndex >= 8) {
        return { 
          view: 'expansion',
          currentQuestionIndex: 0 
        };
      }
    } else if (state.quizType === 'standard') {
      if (nextIndex >= 12) {
        return { 
          view: 'lead-capture',
          currentQuestionIndex: 0 
        };
      }
    }
    
    return { currentQuestionIndex: nextIndex };
  }),

  startQuiz: () => set({
    view: 'quiz-selection',
    quizType: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    currentQQEPFlag: null
  }),

  cycleVariant: () => set((state) => ({
    abTestVariant: state.abTestVariant === 'A' ? 'B' : 
                   state.abTestVariant === 'B' ? 'C' : 'A'
  })),

  setKeyboardNavigation: (value) => set({ isKeyboardNavigation: value }),

  setCurrentTagId: (tagId) => set({ currentTagId: tagId }),  // Updated setter

  resetQuiz: () => set(initialState),

  clearAnswers: () => set({
    userAnswers: [],
    currentQuestionIndex: 0,
    currentTagId: null, // Reset `currentTagId`
  })
}));