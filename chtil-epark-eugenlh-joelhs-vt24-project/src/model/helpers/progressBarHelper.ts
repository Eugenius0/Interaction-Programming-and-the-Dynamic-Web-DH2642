import { ProgressBarProps } from "../../views/game/progressBarView";
import { GameState } from "../types/gameStateTypes";

export function getProgressBarProps(gameState: GameState): ProgressBarProps {
  return {
    deckLength: gameState.getDeckLength(),
    resultsSubmitted: gameState.results.length,
    questionProgress: gameState.getQuestionProgress(),
    currentStreak: gameState.currentStreak,
  };
}
