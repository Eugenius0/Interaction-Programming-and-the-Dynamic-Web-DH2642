import { useMediaQuery } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Model } from "../model/Model";
import { getCountdownTimerProps } from "../model/helpers/countdownTimerViewHelpers";
import { getGameSummaryProps } from "../model/helpers/gameSummaryHelpers";
import { getProgressBarProps } from "../model/helpers/progressBarHelper";
import { getScoreProps } from "../model/helpers/scoreViewHelper";
import {
  FactOrFictionGameContent,
  FactOrFictionProps,
} from "../views/factOrFictionView";
import { GameLayout, MobileGameLayout } from "../views/game/gameLayout";
import {
  GameSummaryView,
  GameSummaryViewMobile,
} from "../views/game/summary/gameSummaryView";
import { MobileGameSummaryRowDetails } from "../views/game/summary/mobileGameSummaryTableRow";
import LoadingScreenView from "../views/ui/loadingScreenView";

type FactOrFictionPresenterProps = {
  model: Model;
};

const FactOrFictionPresenter = observer(function (
  props: FactOrFictionPresenterProps
) {
  useEffect(() => {
    if (
      props.model.ready &&
      (!props.model.gamePromiseState.data ||
        props.model.currentGame !== "factOrFiction")
    ) {
      // Only start the game if there was no game to load
      props.model.startFactOrFictionGame();
    }
  }, [props.model.ready]);

  const mobile = useMediaQuery("(max-width: 800px)");
  const confirm = useConfirm();
  const navigate = useNavigate();

  if (!props.model.gamePromiseState.data) {
    return <LoadingScreenView error={props.model.gamePromiseState.error} />;
  } else {
    // render if the data is already loaded
    const gameState = props.model.gamePromiseState.data;
    const timerProps = getCountdownTimerProps(gameState);
    const progressBarProps = getProgressBarProps(gameState);
    const scoreProps = getScoreProps(
      gameState,
      props.model.getHighscore("FactOrFiction")
    );

    if (gameState.isGameFinished()) {
      props.model.updateHighScores();
      const { gameSummaryProps, mobileGameSummaryRowProps } =
        getGameSummaryProps(
          gameState,
          props.model.highScores.factOrFiction,
          props.model.startFactOrFictionGame.bind(props.model),
          props.model.currentGame!
        );
      return mobile ? (
        <>
          <MobileGameSummaryRowDetails {...mobileGameSummaryRowProps} />
          <GameSummaryViewMobile {...gameSummaryProps} />
        </>
      ) : (
        <GameSummaryView {...gameSummaryProps} />
      );
    }

    const fact = gameState.getCurrentFact();

    const factOrFictionProps: FactOrFictionProps = {
      fact: fact.factString,
      flag: fact.countryFlag ? fact.countryFlag : "",
      handleFactACB: handleFactACB,
      handleFictionACB: handleFictionACB,
      handleSkipACB: handleSkipACB,
    };

    return mobile ? (
      <MobileGameLayout
        title1="Fact o"
        title2="r Fiction"
        handleQuitACB={handleQuitACB}
        progressBarProps={progressBarProps}
        countdownTimerProps={timerProps}
        scoreProps={scoreProps}
      >
        <FactOrFictionGameContent {...factOrFictionProps} />
      </MobileGameLayout>
    ) : (
      <GameLayout
        title1="Fact o"
        title2="r Fiction"
        handleQuitACB={handleQuitACB}
        progressBarProps={progressBarProps}
        countdownTimerProps={timerProps}
        scoreProps={scoreProps}
      >
        <FactOrFictionGameContent {...factOrFictionProps} />
      </GameLayout>
    );

    function handleAnswerACB(answer: "Fact" | "Fiction" | "") {
      gameState.setAnswer(answer);
      gameState.submitAnswer();
      props.model.updateHighScores();
      gameState.handlePointsFeedback();
    }

    function handleFactACB() {
      handleAnswerACB("Fact");
    }

    function handleFictionACB() {
      handleAnswerACB("Fiction");
    }

    function handleSkipACB() {
      handleAnswerACB("");
    }

    function handleQuitACB() {
      confirm({ description: "Are you sure you want to quit the game?" }).then(
        () => navigate("/home")
      );
    }
  }
});
export default FactOrFictionPresenter;
