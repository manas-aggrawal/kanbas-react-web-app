// In your reducer file (e.g., reducer.ts or quizzesSlice.ts)

import { createSlice } from "@reduxjs/toolkit";

interface Quiz {
  _id: string;
  title: string;
  course: string;
  quizType: string;
  points: string;
  description: string;
  assignmentGroup: string;
  settings: {
    shuffleAnswers: boolean;
    timeLimit: number;
    multipleAttempts: {
      enabled: boolean;
      attemptsAllowed: number;
    };
    showCorrectAnswers: {
      enabled: boolean;
      timing: string;
    };
    accessCode: string;
    oneQuestionAtATime: boolean;
    webcamRequired: boolean;
    lockQuestionsAfterAnswering: boolean;
  };
  dates: {
    due: string;
    available: string;
    until: string;
  };
  isPublished: boolean;
  questions: Array<{ _id: string; [key: string]: any }>;
}

const initialState: { quizzes: Quiz[]; quiz: {} } = {
  quizzes: [],
  quiz: {},
};

// Create the slice
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, { payload: quiz }) => {
      state.quizzes.push(quiz);
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((q) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: updatedQuiz }) => {
      state.quizzes = state.quizzes.map((q) =>
        q._id === updatedQuiz._id ? updatedQuiz : q
      );
    },
    addQuestionToQuiz: (state, { payload }) => {
      const { quizId, question } = payload;
      const quiz = state.quizzes.find((q) => q._id === quizId);
      if (quiz) {
        quiz.questions.push(question);
      }
    },
    updateQuestionInQuiz: (state, { payload }) => {
      const { quizId, question } = payload;
      const quiz = state.quizzes.find((q) => q._id === quizId);
      if (quiz) {
        quiz.questions = quiz.questions.map((q) =>
          q.q_id === question.q_id ? question : q
        );
      }
    },
    deleteQuestionFromQuiz: (state, { payload }) => {
      const { quizId, questionId } = payload;
      const quiz = state.quizzes.find((q) => q._id === quizId);
      if (quiz) {
        quiz.questions = quiz.questions.filter((q) => q.q_id !== questionId);
      }
    },
    setQuiz: (state, { payload }) => {
      state.quiz = payload.quiz;
    },
  },
});

export const {
  setQuizzes,
  addQuiz,
  deleteQuiz,
  updateQuiz,
  addQuestionToQuiz,
  updateQuestionInQuiz,
  deleteQuestionFromQuiz,
  setQuiz,
} = quizzesSlice.actions;

// Export the reducer and initialState
export default quizzesSlice.reducer;
