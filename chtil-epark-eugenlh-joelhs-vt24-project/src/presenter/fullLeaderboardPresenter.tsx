import { useMediaQuery } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Model } from "../model/Model";
import { FullLeaderboardView } from "../views/leaderboard/fullLeaderboardView";

type FullLeaderboardPresenterType = {
  model: Model;
};

const FullLeaderboardPresenter = observer(function (
  props: FullLeaderboardPresenterType
) {
  let highscoreData;
  switch (props.model.leaderboards.selectedCategory) {
    case "categoryQuest":
      highscoreData = props.model.leaderboards.categoryQuest;
      break;
    case "countryQuest":
      highscoreData = props.model.leaderboards.countryQuest;
      break;
    case "factOrFiction":
      highscoreData = props.model.leaderboards.factOrFiction;
      break;
  }

  highscoreData = highscoreData.toSorted((a, b) => b.score - a.score);
  const displayMobile = useMediaQuery("(max-width: 700px)");

  const leaderboardProps = {
    setSelectedCategory: setSelectedCategoryACB,
    selectedCategory: props.model.leaderboards.selectedCategory,
    highscores: highscoreData,
    mobile: displayMobile,
    onCategoryChange(_: any, category: any) {
      if (category === null) return;
      props.model.leaderboards.setSelectedCategory(category);
    },
  };

  function setSelectedCategoryACB(
    newCategory: "factOrFiction" | "categoryQuest" | "countryQuest"
  ) {
    props.model.leaderboards.setSelectedCategory(newCategory);
  }
  return <FullLeaderboardView {...leaderboardProps} />;
});

export default FullLeaderboardPresenter;
