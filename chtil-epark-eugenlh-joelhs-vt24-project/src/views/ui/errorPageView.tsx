import { Box, Typography } from "@mui/material";

type ErrorPageViewProps = {
  errorString: string;
};

function ErrorPageView(props: ErrorPageViewProps) {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    m: "40px",
  };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h2">{props.errorString}</Typography>
    </Box>
  );
}

export default ErrorPageView;
