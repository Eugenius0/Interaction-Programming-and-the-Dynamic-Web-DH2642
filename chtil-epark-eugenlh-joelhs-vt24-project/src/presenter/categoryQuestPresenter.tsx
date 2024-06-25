import { observer } from "mobx-react-lite";
import { Model } from "../model/Model";

import { useMediaQuery } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCountdownTimerProps } from "../model/helpers/countdownTimerViewHelpers";
import { getGameSummaryProps } from "../model/helpers/gameSummaryHelpers";
import { getProgressBarProps } from "../model/helpers/progressBarHelper";
import { getScoreProps } from "../model/helpers/scoreViewHelper";
import {
  CategoryQuestMenuGameContent,
  CategoryQuestMenuViewProps,
  MobileCategoryQuestGameContent,
} from "../views/categoryQuestMenuView";
import {
  CategoryQuestQuestionGameContent,
  CategoryQuestQuestionViewProps,
} from "../views/categoryQuestQuestionView";
import { GameLayout, MobileGameLayout } from "../views/game/gameLayout";
import {
  GameSummaryView,
  GameSummaryViewMobile,
} from "../views/game/summary/gameSummaryView";
import { MobileGameSummaryRowDetails } from "../views/game/summary/mobileGameSummaryTableRow";
import LoadingScreenView from "../views/ui/loadingScreenView";

type CategoryQuestPresenterProps = {
  model: Model;
};

const CategoryQuestPresenter = observer(function (
  props: CategoryQuestPresenterProps
) {
  useEffect(() => {
    if (
      props.model.ready &&
      (!props.model.gamePromiseState.data ||
        props.model.currentGame !== "categoryQuest")
    ) {
      // Only start the game if there was no game to load
      props.model.startCategoryQuestGame();
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
      props.model.getHighscore("CategoryQuest")
    );

    if (gameState.isGameFinished()) {
      props.model.updateHighScores();
      const { gameSummaryProps, mobileGameSummaryRowProps } =
        getGameSummaryProps(
          gameState,
          props.model.highScores.categoryQuest,
          props.model.startCategoryQuestGame.bind(props.model),
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

    if (gameState.displayCategoryQuestQuestion) {
      const categoryQuestQuestionProps: CategoryQuestQuestionViewProps = {
        categoryAnswer: gameState.answer,
        handleCategoryAnswerChangeACB: handleCategoryAnswerChangeACB,
        handleSubmitACB: handleSubmitACB,
        handleSkipACB: handleSkipACB,
        factString: gameState.getCurrentFact().factString,
        handleBackACB: handleBackACB,
        categoryCountry: gameState.categoryCountry
          ? gameState.categoryCountry
          : "",
        categoryCountryFlag: gameState.categoryCountryFlag
          ? gameState.categoryCountryFlag
          : "",
        placeholderText: gameState.getPlaceholderText(),
      };
      if (mobile) {
        return (
          <MobileGameLayout
            title1="Category "
            title2="Quest"
            handleQuitACB={handleQuitACB}
            progressBarProps={progressBarProps}
            countdownTimerProps={timerProps}
            scoreProps={scoreProps}
          >
            <CategoryQuestQuestionGameContent {...categoryQuestQuestionProps} />
          </MobileGameLayout>
        );
      } else {
        return (
          <GameLayout
            title1="Category "
            title2="Quest"
            handleQuitACB={handleQuitACB}
            progressBarProps={progressBarProps}
            countdownTimerProps={timerProps}
            scoreProps={scoreProps}
          >
            <CategoryQuestQuestionGameContent {...categoryQuestQuestionProps} />
          </GameLayout>
        );
      }
    } else {
      const categoryQuestMenuProps: CategoryQuestMenuViewProps = {
        categoryCountry: gameState.categoryCountry
          ? gameState.categoryCountry
          : "",
        categoryCountryFlag: gameState.categoryCountryFlag
          ? gameState.categoryCountryFlag
          : "",
        handleCategoryACB: handleCategoryACB,
        isCategorySubmitted: isCategorySubmitted,
        deck: gameState.deck.map((deckItem) => deckItem.factString),
      };
      if (mobile) {
        return (
          <MobileGameLayout
            title1="Category "
            title2="Quest"
            handleQuitACB={handleQuitACB}
            progressBarProps={progressBarProps}
            countdownTimerProps={timerProps}
            scoreProps={scoreProps}
          >
            <MobileCategoryQuestGameContent {...categoryQuestMenuProps} />
          </MobileGameLayout>
        );
      } else {
        return (
          <GameLayout
            title1="Category "
            title2="Quest"
            handleQuitACB={handleQuitACB}
            progressBarProps={progressBarProps}
            countdownTimerProps={timerProps}
            scoreProps={scoreProps}
          >
            <CategoryQuestMenuGameContent {...categoryQuestMenuProps} />
          </GameLayout>
        );
      }
    }

    function handleCategoryAnswerChangeACB(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      gameState.setAnswer(event.target.value);
    }
    function isCategorySubmitted(fact: string) {
      return gameState.results.findIndex((e) => e.question === fact) > -1;
    }
    function handleSubmitACB() {
      gameState.submitAnswer();
      props.model.updateHighScores();
      gameState.handlePointsFeedback();
      gameState.setDisplayCategoryQuestQuestion(false);
    }

    function handleSkipACB() {
      gameState.setAnswer("");
      handleSubmitACB();
    }

    function handleCategoryACB(categoryIndex: number) {
      gameState.setDeckIndex(categoryIndex);
      gameState.setDisplayCategoryQuestQuestion(true);
    }

    function handleQuitACB() {
      confirm({ description: "Are you sure you want to quit the game?" }).then(
        () => navigate("/home")
      );
    }

    function handleBackACB() {
      gameState.setDisplayCategoryQuestQuestion(false);
    }
  }
});

export default CategoryQuestPresenter;
