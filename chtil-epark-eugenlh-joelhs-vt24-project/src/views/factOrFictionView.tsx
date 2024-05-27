import { Box, Button, Typography } from "@mui/material";
import { colorPalette } from "../globals";

export type FactOrFictionProps = {
  fact: string;
  flag: string;
  handleFactACB: () => void;
  handleFictionACB: () => void;
  handleSkipACB: () => void;
};

export function FactOrFictionGameContent(props: FactOrFictionProps) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: colorPalette.white,
          borderRadius: "0.5rem",
          padding: "0.5rem",
        }}
      >
        <Typography>
          <img src={props.flag} alt="Country Flag" width="30" height="20" />
          {"  "} {props.fact}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: colorPalette.white,
          display: "flex",
          borderRadius: "1rem",
          padding: "0.5rem",
        }}
      >
        <Box sx={{ margin: "auto", display: "flex", gap: "2rem" }}>
          <Button
            onClick={props.handleFactACB}
            sx={{
              margin: "auto",
              width: "6rem",
              height: "4rem",
            }}
            variant="contained"
            color="primary"
          >
            Fact
          </Button>
          <Button
            onClick={props.handleFictionACB}
            sx={{
              margin: "auto",
              width: "6rem",
              height: "4rem",
            }}
            variant="contained"
            color="secondary"
          >
            Fiction
          </Button>
        </Box>
      </Box>
      <Button
        onClick={props.handleSkipACB}
        variant="contained"
        color="secondary"
      >
        Skip
      </Button>
    </>
  );
}
