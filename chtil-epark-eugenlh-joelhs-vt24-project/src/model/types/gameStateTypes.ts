export type GameState = {
  timeElapsed: number;
  timeLimit: number;

  categoryCountry?: string;
  categoryCountryFlag?: string;

  deck: Fact[];
  deckIndex: number;
  results: GameResult[];
  answer: string;

  currentStreak: number;
  highestStreak: number;
  pointsFeedback: PointsFeedback;
  displayCategoryQuestQuestion?: boolean;

  gameSummaryDetails: GameSummaryDetails;

  updateTimeElapsed: (newTimeElapsed: number) => void;
  isTimeExpired: () => boolean;

  getDeckLength: () => number;
  getCurrentFact: () => Fact;
  submitAnswer: () => void;
  updateResult: (newResult: GameResult) => void;
  advanceGame: () => void;
  isGameFinished: () => boolean;
  getScore: () => number;
  updateStreak: (points: number) => void;
  setAnswer: (answer: string) => void;
  getLastPointsScored: () => number | null;
  getQuestionProgress: () => number;
  calculateScoreReward: (
    correct: boolean,
    isNumber: boolean,
    currentFact: string,
    userAnswer: string
  ) => number;
  calculateTimeBonus: (timeElapsed: number, timeLimit: number) => number;
  setDisplayCategoryQuestQuestion: (display: boolean) => void;
  setDeckIndex: (index: number) => void;
  getPlaceholderText: () => string;

  handlePointsFeedback: () => void;

  calculateQuestionsAnsweredRight: () => number;
  calculateQuestionsSkipped: () => number;
};

export type GameResult = {
  question: string;
  correctAnswer: string;
  userAnswer: string;
  points: number;
  skipped: boolean;
};

type PointsFeedback = {
  display: boolean;
  status: "skipped" | "correct" | "wrong" | null;
  timeout: NodeJS.Timeout | null;
};

export type Fact = {
  factString: string;
  correctFact: string[];
  countryFlag?: string;
};

export type GameSummaryDetails = {
  open: boolean;
  handleClose: () => void;
  resultToDisplay: GameResult;
  handleOpen: (result: GameResult) => void;
};
