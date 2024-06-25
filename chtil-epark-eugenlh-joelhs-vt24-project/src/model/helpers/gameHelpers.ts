import { GameResult, GameState } from "../types/gameStateTypes";

export const defaultGame: GameState = {
  deck: [],
  deckIndex: 0,
  answer: "",
  results: [],
  currentStreak: 0,
  highestStreak: 0,
  timeElapsed: 0,
  timeLimit: 3 * 60 * 1000,
  pointsFeedback: {
    display: false,
    status: null,
    timeout: null,
  },
  gameSummaryDetails: {
    open: false,
    handleClose() {
      this.open = false;
    },
    resultToDisplay: {
      question: "",
      correctAnswer: "",
      userAnswer: "",
      points: 0,
      skipped: false,
    },
    handleOpen(result: GameResult) {
      this.resultToDisplay = result;
      this.open = true;
    },
  },
  getQuestionProgress() {
    return (this.results.length / this.deck.length) * 100;
  },
  advanceGame() {
    this.deckIndex++;
  },
  getCurrentFact() {
    return this.deck[this.deckIndex];
  },
  calculateQuestionsAnsweredRight() {
    return this.results.reduce((acc, result) => {
      return result.points > 0 ? acc + 1 : acc;
    }, 0);
  },
  calculateQuestionsSkipped() {
    return this.results.reduce((acc, result) => {
      return result.skipped ? acc + 1 : acc;
    }, 0);
  },
  calculateScoreReward(
    correct: boolean,
    isNumber: boolean,
    currentFact: string,
    userAnswer: string
  ) {
    const baseScore = 100;
    const streakBonus = 10 * this.currentStreak;
    const totalScore = baseScore + streakBonus;
    if (isNumber) {
      const correctValue = Number(currentFact);
      const userValue = Number(userAnswer);
      const percentageDeviation =
        Math.abs((correctValue - userValue) / correctValue) * 100;
      if (percentageDeviation <= 10) {
        return totalScore;
      } else if (percentageDeviation <= 30) {
        const pointDeduction = percentageDeviation * 2;
        return Math.round(totalScore - pointDeduction);
      } else {
        return 0;
      }
    } else {
      return correct ? totalScore : 0;
    }
  },
  calculateTimeBonus(timeElapsed: number, timeLimit: number) {
    const percentageRemaining = (timeLimit - timeElapsed) / timeLimit;
    const timeBonus = Math.round(this.getScore() * percentageRemaining);
    return timeElapsed <= timeLimit ? timeBonus : 0;
  },
  getDeckLength() {
    return this.deck.length;
  },
  getScore() {
    return this.results.reduce((acc, result) => {
      return acc + result.points;
    }, 0);
  },
  getLastPointsScored() {
    return this.results.length > 0
      ? this.results[this.results.length - 1].points
      : null;
  },
  isGameFinished() {
    return this.results.length >= this.deck.length || this.isTimeExpired();
  },
  updateStreak(points) {
    this.currentStreak = points > 0 ? this.currentStreak + 1 : 0;
    this.highestStreak = Math.max(this.highestStreak, this.currentStreak);
  },
  submitAnswer() {
    const currentFact = this.getCurrentFact();
    const correctFact = currentFact.correctFact[0]
      .replace(".", "")
      .toLowerCase();
    const userAnswer = this.answer.replace(".", "").toLowerCase();
    const isCorrect = correctFact === userAnswer;
    const skipped = this.answer === "";
    const regex = /^[0-9]+$/;
    const isNumber = regex.test(userAnswer);
    const points = this.calculateScoreReward(
      isCorrect,
      isNumber,
      currentFact.correctFact[0],
      userAnswer
    );
    const newResult: GameResult = {
      question: currentFact.factString,
      correctAnswer: currentFact.correctFact[0],
      userAnswer: this.answer,
      points: skipped ? 0 : points,
      skipped: skipped,
    };

    this.updateStreak(points);
    this.updateResult(newResult);
    this.setAnswer("");
    this.advanceGame();
  },
  updateTimeElapsed(newTimeElapsed: number) {
    this.timeElapsed = newTimeElapsed;
  },
  isTimeExpired() {
    return this.timeElapsed >= this.timeLimit;
  },
  updateResult(newResult) {
    this.results.push(newResult);
  },
  setAnswer(answer) {
    this.answer = answer;
  },
  handlePointsFeedback() {
    if (this.pointsFeedback.timeout) {
      clearTimeout(this.pointsFeedback.timeout);
    }
    this.pointsFeedback.timeout = setTimeout(
      () => (this.pointsFeedback.display = false),
      1000
    );

    this.pointsFeedback.display = true;
    const lastResult = this.results.slice(-1)[0];

    if (lastResult.skipped) {
      this.pointsFeedback.status = "skipped";
    } else {
      this.pointsFeedback.status = lastResult.points > 0 ? "correct" : "wrong";
    }
  },
  setDisplayCategoryQuestQuestion(display) {
    this.displayCategoryQuestQuestion = display;
  },
  setDeckIndex(index) {
    this.deckIndex = index;
  },
  getPlaceholderText() {
    function getKeyword(questionString: string): string {
      const keywords = [
        "country",
        "gdp",
        "surface",
        "capital",
        "currency",
        "population",
        "continent",
      ];
      const includedKeyword = keywords.find((keyword) =>
        questionString.includes(keyword)
      );
      return includedKeyword || "";
    }
    const questionString = this.getCurrentFact().factString.toLowerCase();
    const keyword = getKeyword(questionString);
    switch (keyword) {
      case "country":
        return "e.g. Austria";
      case "gdp":
        return "e.g. 260000000";
      case "surface":
        return "e.g. 900000";
      case "capital":
        return "e.g. Paris";
      case "currency":
        return "e.g. Euro";
      case "population":
        return "e.g. 120000000";
      case "continent":
        return "e.g. Asia";
      default:
        return "Enter Answer";
    }
  },
};
