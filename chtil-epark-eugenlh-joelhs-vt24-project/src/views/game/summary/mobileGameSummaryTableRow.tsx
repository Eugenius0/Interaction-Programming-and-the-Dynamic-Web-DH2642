import { GameResult } from "../../../model/types/gameStateTypes";
import { colorPalette } from "../../../globals";
import { Backdrop, Paper, Typography } from "@mui/material";

export type MobileGameSummaryRowProps = {
  result: GameResult;
  handleClose: () => void;
  open: boolean;
};

export function MobileGameSummaryRowDetails(props: MobileGameSummaryRowProps) {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
      open={props.open}
      onClick={props.handleClose}
    >
      <Paper
        sx={{
          padding: "1rem",
          backgroundColor:
            props.result.userAnswer === "Fact"
              ? colorPalette.primary
              : colorPalette.secondary,
        }}
      >
        <Typography>Your Answer: {props.result.userAnswer}</Typography>
      </Paper>
      <Paper
        sx={{
          padding: "1rem",
          backgroundColor:
            props.result.correctAnswer === "Fact"
              ? colorPalette.primary
              : colorPalette.secondary,
        }}
      >
        <Typography>Correct Answer: {props.result.correctAnswer}</Typography>
      </Paper>
    </Backdrop>
  );
}
