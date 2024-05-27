import { Box, Container, Typography } from "@mui/material";
import { colorPalette } from "../../globals";
import {
  LeaderBoardPreviewView,
  LeaderboardPreviewViewMobile,
} from "./leaderboardPreview";
import MenuButtonView from "./menuButtonView";
import { HighScore } from "../../model/types/leaderboardTypes";

type MenuViewProps = {
  topThree: HighScore[];
  onCategoryChange: (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    category: any
  ) => void;
  selectedCategory: string;
};

export function MenuView(props: MenuViewProps) {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        marginY: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <Box sx={{ gridColumn: "1 / span 2", gridRow: 1, textAlign: "center" }}>
        <Typography variant="h2">
          <span style={{ color: colorPalette.primary }}>Country</span>{" "}
          <span style={{ color: colorPalette.secondary }}>Quiz</span>
        </Typography>
      </Box>
      <Box sx={{ gridColumn: 1, gridRow: 2 }}>
        <Typography
          variant="h2"
          textAlign="center"
          color={colorPalette.primary}
        >
          Game Modes
        </Typography>
      </Box>

      <Box sx={{ gridColumn: 2, gridRow: 2 }}>
        <Typography
          variant="h2"
          textAlign="center"
          color={colorPalette.secondary}
        >
          Leaderboard
        </Typography>
      </Box>

      <Box sx={{ gridColumn: 1, gridRow: 3 }}>
        <MenuButtonView />
      </Box>

      <Box sx={{ gridColumn: 2, gridRow: 3 }}>
        <LeaderBoardPreviewView
          onCategoryChange={props.onCategoryChange}
          selectedCategory={props.selectedCategory}
          topThree={props.topThree}
        />
      </Box>
    </Container>
  );
}

export function MenuViewMobile(props: MenuViewProps) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        marginY: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      maxWidth="lg"
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">
          <span style={{ color: colorPalette.primary }}>Country</span>{" "}
          <span style={{ color: colorPalette.secondary }}>Quiz</span>
        </Typography>
      </Box>

      <Box>
        <MenuButtonView />
      </Box>

      <Box>
        <LeaderboardPreviewViewMobile
          onCategoryChange={props.onCategoryChange}
          selectedCategory={props.selectedCategory}
          topThree={props.topThree}
        />
      </Box>
    </Container>
  );
}
