import { Button } from "@mui/material";
import { colorPalette } from "../../globals";

export function QuitButton(props: { handleQuitACB: () => void }) {
  return (
    <Button
      variant="contained"
      onClick={props.handleQuitACB}
      sx={{
        backgroundColor: colorPalette.redLight,
        textAlign: "center",
        height: "2.5rem",
        "&:hover": {
          backgroundColor: colorPalette.redDark,
        },
      }}
    >
      Quit
    </Button>
  );
}
