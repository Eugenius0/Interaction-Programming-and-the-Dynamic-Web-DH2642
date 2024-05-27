import { Box, Button } from "@mui/material";
import { colorPalette } from "../../globals";
import { HighScore } from "../../model/types/leaderboardTypes";
import { LeaderboardItemView } from "../leaderboard/leaderboardItemView";
import TabView from "../leaderboard/tabView";

type LeaderboardPreviewViewProps = {
  topThree: HighScore[];
  onCategoryChange: (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    category: any
  ) => void;
  selectedCategory: string;
};

function renderLeaderboardItems(highscore: HighScore, index: number) {
  const topThreeColors = [
    colorPalette.gold,
    colorPalette.silver,
    colorPalette.bronze,
  ];
  return (
    <LeaderboardItemView
      key={index}
      highscore={highscore}
      position={index + 1}
      backgroundColor={topThreeColors[index]}
    />
  );
}

const ViewLeaderboardButton = (
  <Button
    sx={{
      width: "16rem",
      margin: "auto",
      height: "4rem",
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.03)",
      },
    }}
    href="/leaderboard"
    variant="contained"
    color="secondary"
  >
    View Full Leaderboard
  </Button>
);

export function LeaderBoardPreviewView(props: LeaderboardPreviewViewProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "32rem",
      }}
    >
      <TabView
        selectedCategory={props.selectedCategory}
        onCategoryChange={props.onCategoryChange}
      />

      <Box
        sx={{
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          border: 2,
          borderRadius: 4,
        }}
      >
        {props.topThree.length > 0 ? (
          props.topThree.map(renderLeaderboardItems)
        ) : (
          <Box sx={{ textAlign: "center" }}>No Highscores Available</Box>
        )}
      </Box>

      {ViewLeaderboardButton}
    </Box>
  );
}

export function LeaderboardPreviewViewMobile(
  _props: LeaderboardPreviewViewProps
) {
  return ViewLeaderboardButton;
}
