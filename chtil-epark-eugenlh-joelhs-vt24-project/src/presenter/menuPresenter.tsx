import { useMediaQuery } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Model } from "../model/Model";
import { HighScore } from "../model/types/leaderboardTypes";
import { MenuView, MenuViewMobile } from "../views/menu/menuView";

type MenuPresenterType = {
  model: Model;
};

const MenuPresenter = observer(function (props: MenuPresenterType) {
  let highscoreData: HighScore[] | null;

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

  const topThree: HighScore[] = highscoreData
    .toSorted((a, b) => b.score - a.score)
    .slice(0, 3);

  const isScreenWide = useMediaQuery("(min-width: 1000px)");

  const menuProps = {
    selectedCategory: props.model.leaderboards.selectedCategory,
    topThree: topThree,
    onCategoryChange(_: any, category: any) {
      if (category === null) return;
      props.model.leaderboards.setSelectedCategory(category);
    },
  };

  return isScreenWide ? (
    <MenuView {...menuProps} />
  ) : (
    <MenuViewMobile {...menuProps} />
  );
});

export default MenuPresenter;
