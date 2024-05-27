import { ScoreViewProps } from "../../views/game/scoreView";
import { GameState } from "../types/gameStateTypes";

export function getScoreProps(
  gameState: GameState,
  highscore: number | null
): ScoreViewProps {
  return {
    lastPointsScored: gameState.getLastPointsScored(),
    displayLastPoints: gameState.pointsFeedback.display,
    skippedLastQuestion: gameState.pointsFeedback.status == "skipped",
    currentScore: gameState.getScore(),
    highScore: highscore,
  };
}
