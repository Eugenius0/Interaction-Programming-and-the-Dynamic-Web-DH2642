import { observer } from "mobx-react-lite";
import { Model } from "../model/Model";
import { useEffect } from "react";
import LoadingScreenView from "../views/ui/loadingScreenView";
import {
  CountryQuestGameContent,
  CountryQuestViewProps,
} from "../views/countryQuestView";
import { useMediaQuery } from "@mui/material";
import {
  GameSummaryView,
  GameSummaryViewMobile,
} from "../views/game/summary/gameSummaryView";
import { MobileGameSummaryRowDetails } from "../views/game/summary/mobileGameSummaryTableRow";
import { getProgressBarProps } from "../model/helpers/progressBarHelper";
import { getGameSummaryProps } from "../model/helpers/gameSummaryHelpers";
import { getScoreProps } from "../model/helpers/scoreViewHelper";
import { getCountdownTimerProps } from "../model/helpers/countdownTimerViewHelpers";
import { useConfirm } from "material-ui-confirm";
import { useNavigate } from "react-router-dom";
import { GameLayout, MobileGameLayout } from "../views/game/gameLayout";

type CountryQuestPresenterProps = {
  model: Model;
};

const CountryQuestPresenter = observer(function (
  props: CountryQuestPresenterProps
) {
  useEffect(() => {
    if (
      props.model.ready &&
      (!props.model.gamePromiseState.data ||
        props.model.currentGame !== "countryQuest")
    ) {
      // Only start the game if there was no game to load
      props.model.startCountryQuestGame();
    }
  }, [props.model.ready]);

  const mobile = useMediaQuery("(max-width: 800px)");
  const confirm = useConfirm();
  const navigate = useNavigate();

  if (!props.model.gamePromiseState.data) {
    return <LoadingScreenView error={props.model.gamePromiseState.error} />;
  } else {
    const gameState = props.model.gamePromiseState.data;
    const timerProps = getCountdownTimerProps(gameState);
    const progressBarProps = getProgressBarProps(gameState);
    const scoreProps = getScoreProps(
      gameState,
      props.model.getHighscore("CountryQuest")
    );

    if (gameState.isGameFinished()) {
      props.model.updateHighScores();
      const { gameSummaryProps, mobileGameSummaryRowProps } =
        getGameSummaryProps(
          gameState,
          props.model.highScores.countryQuest,
          props.model.startCountryQuestGame.bind(props.model),
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

    const countryQuestProps: CountryQuestViewProps = {
      factString: fact.factString,
      countryAnswer: gameState.answer,
      handleCountryAnswerChangeACB: handleCountryAnswerChangeACB,
      handleSubmitACB: handleSubmitACB,
      placeholderText: gameState.getPlaceholderText(),
      handleSkipACB: handleSkipACB,
    };

    return mobile ? (
      <MobileGameLayout
        title1="Country "
        title2="Quest"
        handleQuitACB={handleQuitACB}
        progressBarProps={progressBarProps}
        countdownTimerProps={timerProps}
        scoreProps={scoreProps}
      >
        <CountryQuestGameContent {...countryQuestProps} />
      </MobileGameLayout>
    ) : (
      <GameLayout
        title1="Country "
        title2="Quest"
        handleQuitACB={handleQuitACB}
        progressBarProps={progressBarProps}
        countdownTimerProps={timerProps}
        scoreProps={scoreProps}
      >
        <CountryQuestGameContent {...countryQuestProps} />
      </GameLayout>
    );

    function handleCountryAnswerChangeACB(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      gameState.setAnswer(event.target.value);
    }

    function handleSubmitACB() {
      gameState.submitAnswer();
      props.model.updateHighScores();
      gameState.handlePointsFeedback();
    }

    function handleSkipACB() {
      gameState.setAnswer("");
      handleSubmitACB();
    }

    function handleQuitACB() {
      confirm({ description: "Are you sure you want to quit the game?" }).then(
        () => navigate("/home")
      );
    }
  }
});
export default CountryQuestPresenter;
