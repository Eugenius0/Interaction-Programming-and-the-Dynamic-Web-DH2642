import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Avatar, Box, Typography } from "@mui/material";
import { colorPalette } from "../../globals";
import { HighScore } from "../../model/types/leaderboardTypes";

export type LeaderboardItemProps = {
  highscore: HighScore;
  position: number;
  backgroundColor: string;
  mobile?: boolean;
};

function LeaderboardItemLayout(props: {
  children: ReactJSXElement[];

  backgroundColor: string;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gap: "1rem",
        padding: "0.5rem",
        borderRadius: "1rem",
        border: "solid 0.1rem " + colorPalette.black,
        alignItems: "center",
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.children}
    </Box>
  );
}

function Position(props: { position: number }) {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "50%",
        border: 2,
        width: "2.5rem",
        height: "2.5rem",
        marginLeft: "1rem",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {props.position}.
      </Typography>
    </Box>
  );
}

function Player(props: { highscore: HighScore; mobile?: boolean }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {!props.mobile && (
        <Avatar
          sx={{
            border: colorPalette.black + " solid 0.125rem",
            display: "flex",
          }}
          src={props.highscore.userAvatar}
          alt={props.highscore.displayName}
        />
      )}
      <Typography textAlign={"center"}>
        {props.highscore.displayName}
      </Typography>
    </Box>
  );
}

function Score(props: { highscore: HighScore; mobile?: boolean }) {
  return (
    <Typography
      sx={{ fontWeight: "bold", textAlign: "right", marginRight: "1rem" }}
    >
      {!props.mobile && "Score:"} {props.highscore.score}
    </Typography>
  );
}

export function LeaderboardItemView(props: LeaderboardItemProps) {
  return (
    <LeaderboardItemLayout backgroundColor={props.backgroundColor}>
      <Position position={props.position} />
      <Player mobile={props.mobile} highscore={props.highscore} />
      <Score mobile={props.mobile} highscore={props.highscore} />
    </LeaderboardItemLayout>
  );
}
