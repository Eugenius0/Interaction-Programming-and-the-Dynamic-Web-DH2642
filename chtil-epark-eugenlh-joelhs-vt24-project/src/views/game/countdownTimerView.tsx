import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";
import { CircleIndicator } from "react-indicators";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { colorPalette } from "../../globals";

export type CountdownTimerViewProps = {
  duration: number;
  timeElapsed: number;
  progress: number;
  timeDisplay: any;
  handleTimerUpdate: ({ time }: { time: number }) => void;
  handleTimerFinish: (isTimeExpired: boolean) => void;
};

function CountdownTimerView(props: Readonly<CountdownTimerViewProps>) {
  const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;
  let strokeColor = colorPalette.primary;
  let timeColor = "none";
  let timerAnimation = "none";
  if (props.progress >= 0.75) {
    strokeColor = colorPalette.secondary;
    timeColor = colorPalette.secondary;
    timerAnimation = `${pulsateAnimation} 1s infinite ease-in-out`;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: timerAnimation,
      }}
    >
      <Timer
        active
        duration={props.duration}
        time={props.timeElapsed}
        onTimeUpdate={props.handleTimerUpdate}
        onFinish={props.handleTimerFinish}
      />
      <Typography
        sx={{
          position: "absolute",
          color: timeColor,
        }}
      >
        <Timecode time={props.timeDisplay} />
      </Typography>
      <CircleIndicator
        progress={props.progress}
        size={100}
        stroke={strokeColor}
        strokeWidth={6}
        strokeBackground={colorPalette.gray}
      />
    </Box>
  );
}

export default CountdownTimerView;
