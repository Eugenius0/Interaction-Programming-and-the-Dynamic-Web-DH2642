import { GameSummaryProps } from "../../views/game/summary/gameSummaryView";
import { MobileGameSummaryRowProps } from "../../views/game/summary/mobileGameSummaryTableRow";
import { GameState } from "../types/gameStateTypes";

export function getGameSummaryProps(
  gameState: GameState,
  highscore: number | null,
  startGame: () => void,
  currentGameMode: string
) {
  // this is necessary since calling this does not refer to the object but rather the location the object is called from.
  // So this is the only way to ensure that calling this refers to the same object
  const handleOpen = gameState.gameSummaryDetails.handleOpen.bind(
    gameState.gameSummaryDetails
  );
  const handleClose = gameState.gameSummaryDetails.handleClose.bind(
    gameState.gameSummaryDetails
  );
  const mobileGameSummaryRowProps: MobileGameSummaryRowProps = {
    handleClose: handleClose,
    open: gameState.gameSummaryDetails.open,
    result: gameState.gameSummaryDetails.resultToDisplay,
  };

  const gameSummaryProps: GameSummaryProps = {
    resultArray: gameState.results,
    currentScore: gameState.getScore(),
    highScore: highscore,
    timeExpired: gameState.isTimeExpired(),
    scoreStreak: gameState.highestStreak,
    timeLeft: (gameState.timeLimit - gameState.timeElapsed) / 1000,
    totalQuestions: gameState.getDeckLength(),
    questionsAnsweredRight: gameState.calculateQuestionsAnsweredRight(),
    questionsSkipped: gameState.calculateQuestionsSkipped(),
    handleOpen: handleOpen,
    gameMode: currentGameMode,
    timeBonus: gameState.calculateTimeBonus(
      gameState.timeElapsed,
      gameState.timeLimit
    ),
    handlePlayAgain: startGame,
  };
  return { gameSummaryProps, mobileGameSummaryRowProps };
}
