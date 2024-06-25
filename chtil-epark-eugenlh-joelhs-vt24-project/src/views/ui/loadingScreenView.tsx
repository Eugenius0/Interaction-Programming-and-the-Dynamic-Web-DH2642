import { Box } from "@mui/material";
import ErrorPageView from "./errorPageView";
import loadingGif from "./../../../static/logos/rotating_globe.gif";

type Props = {
  error: Error | null;
};

export default function LoadingScreenView(props: Props) {
  if (props.error) {
    return <ErrorPageView errorString="500: Internal Server Error" />;
  } else {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <img alt="loading gif" src={loadingGif}></img>
      </Box>
    );
  }
}
