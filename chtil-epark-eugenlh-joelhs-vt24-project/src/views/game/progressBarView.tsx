import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

export type ProgressBarProps = {
  deckLength: number;
  resultsSubmitted: number;
  questionProgress: number;
  currentStreak: number;
};

function ProgressBarView(props: Readonly<ProgressBarProps>) {
  const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-2px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(2px);
  }`;

  const streakAnimation =
    props.currentStreak > 0 ? `${shakeAnimation} 0.5s ease-in-out` : "none";
  const streakKey = props.currentStreak > 0 ? props.currentStreak : "";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <LinearProgress
          sx={{
            height: "10",
          }}
          variant="determinate"
          value={props.questionProgress}
          color="secondary"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          minWidth: "30%",
        }}
      >
        <Typography>
          {props.resultsSubmitted} / {props.deckLength}
        </Typography>
        <Typography
          variant="h4"
          sx={{ animation: streakAnimation }}
          key={streakKey}
        >
          🔥
        </Typography>
        <Typography>{props.currentStreak}</Typography>
      </Box>
    </Box>
  );
}
export default ProgressBarView;
