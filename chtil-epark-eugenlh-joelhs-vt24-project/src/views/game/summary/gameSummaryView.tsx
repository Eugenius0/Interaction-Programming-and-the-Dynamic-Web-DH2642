import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  keyframes,
  Button,
} from "@mui/material";
import { colorPalette } from "../../../globals";
import { GameResult } from "../../../model/types/gameStateTypes";

export type GameSummaryProps = {
  currentScore: number;
  highScore: number | null;
  resultArray: GameResult[];
  timeExpired: boolean;
  scoreStreak: number;
  timeLeft: number;
  totalQuestions: number;
  questionsAnsweredRight: number;
  questionsSkipped: number;
  timeBonus: number;
  gameMode: string;
  handleOpen: (result: GameResult) => void;
  handlePlayAgain: () => void;
};

export function GameSummaryView(props: Readonly<GameSummaryProps>) {
  const rowColor = (result: { points: number; skipped: boolean }) => {
    if (result.skipped) return colorPalette.grayLight;
    return result.points > 0 ? colorPalette.greenLight : colorPalette.redLight;
  };

  const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }`;

  const summaryAnimation = `${pulsateAnimation} 1s ease-in-out`;

  function getQuestion(result: string) {
    if (props.gameMode === "countryQuest") {
      return <img src={result} alt="Country Flag" height="20" width="30" />;
    } else {
      return result;
    }
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        marginY: "2rem",
      }}
      maxWidth="md"
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">Game Summary</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handlePlayAgain}
        >
          Play Again
        </Button>
      </Box>

      <Paper
        sx={{
          backgroundColor: colorPalette.primary,
          width: "80%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyItems: "center",
          gap: "1rem",
          paddingY: "2rem",
        }}
        elevation={4}
      >
        <Box
          sx={{
            animation: summaryAnimation,
            gridColumn: "1/3",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            textAlign: "center",
          }}
        >
          <Typography variant="h5">
            {props.timeExpired
              ? "Out of Time!"
              : "Congratulations you finished the game!"}
          </Typography>
          {!props.timeExpired && (
            <Typography>Time bonus: {props.timeBonus}</Typography>
          )}
        </Box>
        <Box sx={{ gridColumn: 1, gridRow: 2 }}>
          <Typography>
            Total Score: {props.currentScore + props.timeBonus}
          </Typography>
        </Box>

        <Box sx={{ gridColumn: 2, gridRow: 2 }}>
          <Typography>High Score: {props.highScore}</Typography>
        </Box>

        <Box sx={{ gridColumn: 1, gridRow: 3 }}>
          <Typography>
            Correct Answers: {props.questionsAnsweredRight} /{" "}
            {props.totalQuestions}
          </Typography>
        </Box>

        <Box sx={{ gridColumn: 2, gridRow: 3 }}>
          <Typography>
            Skipped Answers: {props.questionsSkipped} / {props.totalQuestions}
          </Typography>
        </Box>
        <Box sx={{ gridColumn: 1, gridRow: 4 }}>
          <Typography>Time Left: {props.timeLeft}s</Typography>
        </Box>
        <Box sx={{ gridColumn: 2, gridRow: 4 }}>
          <Typography>Highest Streak: {props.scoreStreak}</Typography>
        </Box>
      </Paper>

      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          margin: "auto",
          border: "0.2rem solid " + colorPalette.primary,
        }}
      >
        <Table size="small" aria-label="Results Summary">
          <TableHead>
            <TableRow sx={{ backgroundColor: colorPalette.primary }}>
              <TableCell width="45%">
                <Typography>Questions</Typography>
              </TableCell>

              <TableCell width="25%" align="center">
                <Typography>Correct Answer</Typography>
              </TableCell>

              <TableCell width="25%" align="center">
                <Typography>Answer</Typography>
              </TableCell>

              <TableCell width="5%" align="right">
                <Typography>Points</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.resultArray.map((result, index) => (
              <TableRow
                key={index + 1}
                sx={{
                  backgroundColor: colorPalette.white,
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "0.05rem solid " + colorPalette.primary,
                    width: "25%",
                  }}
                  scope="row"
                >
                  {getQuestion(result.question)}
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "0.05rem solid " + colorPalette.primary,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  {result.correctAnswer}
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "0.05rem solid " + colorPalette.primary,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  {result.userAnswer}
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "0.05rem solid " + colorPalette.primary,
                    backgroundColor: rowColor(result),
                    textAlign: "center",
                  }}
                >
                  {result.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export function GameSummaryViewMobile(props: Readonly<GameSummaryProps>) {
  const rowColor = (result: { points: number; skipped: boolean }) => {
    if (result.skipped) return colorPalette.grayLight;
    return result.points > 0 ? colorPalette.greenLight : colorPalette.redLight;
  };

  const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }`;

  const summaryAnimation = `${pulsateAnimation} 1s ease-in-out`;

  function getQuestion(result: string) {
    if (props.gameMode == "countryQuest") {
      return <img src={result} alt="Country Flag" height="20" width="30" />;
    } else {
      return result;
    }
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        marginY: "2rem",
      }}
      maxWidth="md"
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">Game Summary</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handlePlayAgain}
        >
          Play Again
        </Button>
      </Box>

      <Paper
        sx={{
          backgroundColor: colorPalette.primary,
          width: "80%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingY: "2rem",
        }}
        elevation={4}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingX: "2rem",
          }}
        >
          <Box sx={{ animation: summaryAnimation, gridColumn: "1/3" }}>
            <Typography variant="h5">
              {props.timeExpired
                ? "Out of Time!"
                : "Congratulations you finished the game!"}
            </Typography>
          </Box>
          {props.timeExpired ? null : (
            <Box>
              <Typography>Time bonus: {props.timeBonus}</Typography>
            </Box>
          )}
          <Box>
            <Typography>
              Total Score: {props.currentScore + props.timeBonus}
            </Typography>
          </Box>

          <Box>
            <Typography>High Score: {props.highScore}</Typography>
          </Box>

          <Box>
            <Typography>
              Correct Answers: {props.questionsAnsweredRight} /{" "}
              {props.totalQuestions}
            </Typography>
          </Box>

          <Box>
            <Typography>
              Skipped Answers: {props.questionsSkipped} / {props.totalQuestions}
            </Typography>
          </Box>
          <Box>
            <Typography>Time Left: {props.timeLeft}s</Typography>
          </Box>
          <Box>
            <Typography>Highest Streak: {props.scoreStreak}</Typography>
          </Box>
        </Box>
      </Paper>

      <TableContainer
        component={Paper}
        sx={{
          width: "80%",
          margin: "auto",
          border: "0.2rem solid " + colorPalette.primary,
        }}
      >
        <Table size="small" aria-label="Questions Summary">
          <TableHead>
            <TableRow sx={{ backgroundColor: colorPalette.primary }}>
              <TableCell sx={{ width: "80%" }}>
                <Typography>Questions</Typography>
              </TableCell>

              <TableCell sx={{ width: "20%", textAlign: "center" }}>
                <Typography>Points</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.resultArray.map((result, index) => (
              <TableRow
                sx={{
                  backgroundColor: colorPalette.white,
                }}
                onClick={() => {
                  props.handleOpen(result);
                }}
                key={index + 1}
              >
                <TableCell
                  sx={{ borderBottom: "0.05rem solid " + colorPalette.primary }}
                  scope="row"
                >
                  {getQuestion(result.question)}
                </TableCell>

                <TableCell
                  sx={{
                    borderBottom: "0.05rem solid " + colorPalette.primary,
                    backgroundColor: rowColor(result),
                    textAlign: "center",
                  }}
                >
                  {result.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
