import { Avatar, Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { colorPalette } from "../../globals";
import { HighScore } from "../../model/types/leaderboardTypes";

type PodiumViewProps = {
  topThree: HighScore[];
  mobile?: boolean;
};

export default function PodiumView(props: PodiumViewProps) {
  function renderPodiumStep(color: string, position: number, height: number) {
    function Position() {
      return (
        <Box
          sx={{
            background: color,
            borderRadius: "50%",
            border: 2,
            width: "2.5rem",
            height: "2.5rem",
            display: "grid",
            alignSelf: props.mobile ? "center" : "flex-start",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginLeft: props.mobile ? "1rem" : "",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{position + 1}.</Typography>
        </Box>
      );
    }

    function Player() {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: props.mobile ? "row" : "column",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          {!props.mobile && (
            <Avatar
              sx={{
                border: color + " solid 0.15rem",
              }}
              src={props.topThree[position].userAvatar}
              alt={props.topThree[position].displayName}
            />
          )}
          <Typography sx={{ textAlign: "center" }}>
            {props.topThree[position].displayName}
          </Typography>
        </Box>
      );
    }

    function Score() {
      return (
        <Typography
          sx={{
            backgroundColor: color,
            padding: "0.2rem",
            textAlign: "center",
            alignSelf: props.mobile ? "center" : "flex-end",
            marginRight: props.mobile ? "1rem" : "",
          }}
        >
          {!props.mobile && "Score:"} {props.topThree[position].score}
        </Typography>
      );
    }

    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: props.mobile ? "1fr 6fr 1fr" : "1fr",
          gap: "1rem",
          padding: "0.5rem",
          borderRadius: "1rem",
          border: "solid 0.2rem " + color,
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: colorPalette.white,
          height: props.mobile ? "4rem" : height + "rem",
          width: props.mobile ? "80%" : "6rem",
          order: props.mobile ? position : 0,
        }}
      >
        <Position />
        <Player />
        <Score />
      </Box>
    );
  }

  return (
    <Paper
      elevation={4}
      sx={{
        display: "grid",
        gridTemplateColumns: props.mobile ? "1fr" : "1fr 1fr 1fr",
        gap: "1rem",
        justifyContent: "space-evenly",
        justifyItems: "center",
        backgroundColor: "primary.light",
        paddingY: "2rem",
        alignItems: props.mobile ? "" : "flex-end",
      }}
    >
      {props.topThree.length > 1 &&
        renderPodiumStep(colorPalette.silver, 1, 14)}
      {props.topThree.length > 0 && renderPodiumStep(colorPalette.gold, 0, 16)}
      {props.topThree.length > 2 &&
        renderPodiumStep(colorPalette.bronze, 2, 12)}
    </Paper>
  );
}
