import { Box, Button, TextField, Typography } from "@mui/material";
import { colorPalette } from "../globals";
export type CategoryQuestQuestionViewProps = {
  factString: string;
  categoryAnswer: string;
  categoryCountry: string;
  categoryCountryFlag: string;
  handleSubmitACB: () => void;
  handleBackACB: () => void;
  handleSkipACB: () => void;
  handleCategoryAnswerChangeACB: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholderText: string;
};

export function CategoryQuestQuestionGameContent(
  props: CategoryQuestQuestionViewProps
) {
  return (
    <Box
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography>
          <img
            src={props.categoryCountryFlag}
            alt="Country Flag"
            width="40"
            height="25"
          />
          {"  "} {props.categoryCountry}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0.5rem",
          backgroundColor: colorPalette.white,
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      >
        <Typography>{props.factString}</Typography>
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
          variant="filled"
          sx={{ width: "100%" }}
          value={props.categoryAnswer}
          onChange={props.handleCategoryAnswerChangeACB}
          placeholder={props.placeholderText}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          gap: "2rem",
          backgroundColor: "white",
          padding: "0.5rem",
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
          onClick={props.handleBackACB}
        >
          Back
        </Button>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.handleSkipACB}
        sx={{
          margin: "auto",
          width: "6rem",
        }}
      >
        Skip
      </Button>
    </Box>
  );
}
