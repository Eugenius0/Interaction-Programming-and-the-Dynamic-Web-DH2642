import { Box, Container, Typography } from "@mui/material";
import { colorPalette } from "../../globals";
import { LeaderboardItemView } from "./leaderboardItemView";
import PodiumView from "./podiumView";
import TabView from "./tabView";
import { HighScore } from "../../model/types/leaderboardTypes";

export type LeaderboardProps = {
  highscores: HighScore[];
  selectedCategory: string;
  mobile?: boolean;

  onCategoryChange: (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    category: any
  ) => void;
};

export function FullLeaderboardView(props: LeaderboardProps) {
  function renderLeaderboardItemsCB(highscore: HighScore, index: number) {
    return (
      <LeaderboardItemView
        backgroundColor={colorPalette.white}
        highscore={highscore}
        position={index + 4}
        key={index}
        mobile={props.mobile}
      />
    );
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "2rem auto",
        }}
      >
        <Typography variant="h2" textAlign="center">
          Leaderboard
        </Typography>

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
          {props.highscores.length > 0 ? (
            <>
              <PodiumView
                mobile={props.mobile}
                topThree={props.highscores.slice(0, 3)}
              />
              {props.highscores.slice(3).map(renderLeaderboardItemsCB)}
            </>
          ) : (
            <Box sx={{ textAlign: "center" }}>No Highscores Available</Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
