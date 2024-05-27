import { Box, Container, Typography } from "@mui/material";
import { colorPalette } from "../../globals";
import { FactCard } from "./factCard";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { QuitButton } from "./exitButton";
import ProgressBarView, { ProgressBarProps } from "./progressBarView";
import ScoreView, { ScoreViewProps } from "./scoreView";
import CountdownTimerView, {
  CountdownTimerViewProps,
} from "./countdownTimerView";

export type GameLayoutProps = {
  title1: string;
  title2: string;
  progressBarProps: ProgressBarProps;
  scoreProps: ScoreViewProps;
  countdownTimerProps: CountdownTimerViewProps;
  children: ReactJSXElement;
  handleQuitACB: () => void;
};

export function GameLayout(props: GameLayoutProps) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        alignItems: "center",
        justifyContent: "center",
        marginY: "2rem",
        gap: "2rem",
      }}
    >
      <Box sx={{ gridColumn: "1 / -1", gridRow: 1, textAlign: "center" }}>
        <Typography sx={{ textAlign: "center" }} variant="h3">
          <span style={{ color: colorPalette.primary }}>{props.title1}</span>
          <span style={{ color: colorPalette.secondary }}>{props.title2}</span>
        </Typography>
      </Box>

      {/* --- FactCard --- */}
      <Box sx={{ gridColumn: "1", gridRow: "2/5" }}>
        <FactCard>{props.children}</FactCard>
      </Box>

      {/* --- CancelButton --- */}
      <Box sx={{ gridColumn: "2", gridRow: "2", justifySelf: "center" }}>
        <QuitButton handleQuitACB={props.handleQuitACB} />
      </Box>

      {/* --- ProgressBar --- */}
      <Box sx={{ gridColumn: "1", gridRow: "5" }}>
        <ProgressBarView {...props.progressBarProps} />
      </Box>

      {/* --- ScoreView --- */}
      <Box sx={{ gridColumn: "2", gridRow: "3/5" }}>
        <ScoreView {...props.scoreProps} />
      </Box>

      {/* --- Timer --- */}
      <Box sx={{ gridColumn: "2", gridRow: "5" }}>
        <CountdownTimerView {...props.countdownTimerProps} />
      </Box>
    </Container>
  );
}

export function MobileGameLayout(props: GameLayoutProps) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginY: "2rem",
        gap: "1rem",
      }}
    >
      <Box sx={{ gridColumn: "1 / -1", gridRow: 1, textAlign: "center" }}>
        <Typography sx={{ textAlign: "center" }} variant="h3">
          <span style={{ color: colorPalette.primary }}>Fact</span> or{" "}
          <span style={{ color: colorPalette.secondary }}>Fiction</span>
        </Typography>
      </Box>

      {/* --- CancelButton --- */}
      <Box sx={{ gridColumn: "2", gridRow: "2", marginX: "auto" }}>
        <QuitButton handleQuitACB={props.handleQuitACB} />
      </Box>

      {/* --- FactCard --- */}
      <Box sx={{ gridColumn: "1", gridRow: "2/4" }}>
        <FactCard>
          {props.children}
        </FactCard>
      </Box>

      {/* --- ProgressBar --- */}
      <Box sx={{ gridColumn: "1", gridRow: "5" }}>
        <ProgressBarView {...props.progressBarProps} />
      </Box>
      {/* --- Timer --- */}
      <Box sx={{ gridColumn: "2", gridRow: "5" }}>
        <CountdownTimerView {...props.countdownTimerProps} />
      </Box>
      {/* --- ScoreView --- */}
      <Box sx={{ gridColumn: "2", gridRow: "3/5" }}>
        <ScoreView {...props.scoreProps} />
      </Box>
    </Container>
  );
}
