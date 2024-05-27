import { Box, Button, TextField, Typography } from "@mui/material";
import { colorPalette } from "../globals";

export type CountryQuestViewProps = {
  factString: string;
  countryAnswer: string;
  handleCountryAnswerChangeACB: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSubmitACB: () => void;
  placeholderText: string;
  handleSkipACB: () => void;
};

export function CountryQuestGameContent(props: CountryQuestViewProps) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: colorPalette.white,
          borderRadius: "0.5rem",
          padding: "0.5rem",
        }}
      >
        <img
          src={props.factString}
          alt="Country Flag"
          width="100"
          height="60"
        />
      </Box>

      <Box
        sx={{
          backgroundColor: colorPalette.white,
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
      >
        <TextField
          color="primary"
          value={props.countryAnswer}
          onChange={props.handleCountryAnswerChangeACB}
          label="Guess the country"
          variant="filled"
          placeholder={props.placeholderText}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          gap: "2rem",
          padding: "0.5rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handleSubmitACB}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={props.handleSkipACB}
        >
          Skip
        </Button>
      </Box>
    </>
  );
}
