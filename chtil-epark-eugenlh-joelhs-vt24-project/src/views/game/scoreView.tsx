import { Box, Grid, Typography } from "@mui/material";
import { colorPalette } from "../../globals";

export type ScoreViewProps = {
  currentScore: number;
  highScore: number | null;
  lastPointsScored: number | null;
  displayLastPoints: boolean;
  skippedLastQuestion: boolean;
};

function ScoreView(props: ScoreViewProps) {
  let highScoreString: string = props.highScore
    ? "High Score: " + props.highScore
    : "No High Score available";

  let pointsFeedback;

  if (props.displayLastPoints) {
    const feedbackColor =
      props.lastPointsScored && props.lastPointsScored > 0
        ? colorPalette.green
        : colorPalette.red;

    pointsFeedback = (
      <span style={{ color: feedbackColor }}> + {props.lastPointsScored}</span>
    );
  }

  if (props.skippedLastQuestion) {
    pointsFeedback = <span style={{ color: "gray" }}>skipped</span>;
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              borderRadius: "0.5rem 0.5rem 0 0",
              padding: "1rem",
            }}
          >
            <Typography>{highScoreString}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "0 0 0.5rem 0.5rem",
              padding: "1rem",
            }}
          >
            <Typography>
              Current Score: {props.currentScore}{" "}
              <span style={{ whiteSpace: "nowrap" }}>{pointsFeedback}</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ScoreView;
