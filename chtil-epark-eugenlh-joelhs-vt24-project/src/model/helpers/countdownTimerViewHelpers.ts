import { CountdownTimerViewProps } from "../../views/game/countdownTimerView";
import { GameState } from "../types/gameStateTypes";

export function getCountdownTimerProps(
  gameState: GameState
): CountdownTimerViewProps {
  return {
    duration: gameState.timeLimit,
    progress: gameState.timeElapsed / gameState.timeLimit,
    timeDisplay: gameState.timeLimit - gameState.timeElapsed,
    timeElapsed: gameState.timeElapsed,
    handleTimerUpdate: handleTimerUpdateACB,
    handleTimerFinish: handleTimerFinishACB,
  };
  function handleTimerUpdateACB({ time }: { time: number }) {
    // this rounds the number down to prevent to many renders
    const round = 50;
    gameState.updateTimeElapsed(Math.floor(time / round) * round);
  }

  function handleTimerFinishACB(isTimeExpired: boolean) {
    if (isTimeExpired) gameState.updateTimeElapsed(gameState.timeLimit);
  }
}
