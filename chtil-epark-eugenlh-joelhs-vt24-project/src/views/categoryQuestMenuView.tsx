import { Typography, Box, Button } from "@mui/material";

export type CategoryQuestMenuViewProps = {
  deck: string[];
  categoryCountry: string;
  categoryCountryFlag: string;
  handleCategoryACB: (categoryIndex: number) => void;
  isCategorySubmitted: (factString: string) => boolean;
};

function renderCategoryQuestButton(
  title: string,
  categoryIndex: number,
  factString: string,
  handleCategoryACB: (categoryIndex: number) => void,
  isCategorySubmitted: (factString: string) => boolean
) {
  return (
    <Button
      key={categoryIndex}
      sx={{
        width: "8rem",
        height: "6rem",
      }}
      onClick={() => handleCategoryACB(categoryIndex)}
      disabled={isCategorySubmitted(factString)}
      variant="contained"
      color="secondary"
    >
      {title}
    </Button>
  );
}

export function CategoryQuestMenuGameContent(
  props: CategoryQuestMenuViewProps
) {
  return (
    <Box
      sx={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2rem",
      }}
    >
      <Box sx={{ textAlign: "center", gridColumn: "1 / span 3" }}>
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
      {props.deck.map((fact, index) => {
        const title = fact.replace("Guess the ", "");
        return renderCategoryQuestButton(
          title,
          index,
          fact,
          props.handleCategoryACB,
          props.isCategorySubmitted
        );
      })}
    </Box>
  );
}

export function MobileCategoryQuestGameContent(
  props: CategoryQuestMenuViewProps
) {
  return (
    <Box
      sx={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
      }}
    >
      <Box sx={{ textAlign: "center", gridColumn: "1 / span 2" }}>
        <Typography>
          <img
            src={props.categoryCountryFlag}
            alt="Country Flag"
            width="40"
            height="25"
          />
          {"  "}
          {props.categoryCountry}
        </Typography>
      </Box>
      {props.deck.map((fact, index) => {
        const title = fact.replace("Guess the ", "");
        return renderCategoryQuestButton(
          title,
          index,
          fact,
          props.handleCategoryACB,
          props.isCategorySubmitted
        );
      })}
    </Box>
  );
}
