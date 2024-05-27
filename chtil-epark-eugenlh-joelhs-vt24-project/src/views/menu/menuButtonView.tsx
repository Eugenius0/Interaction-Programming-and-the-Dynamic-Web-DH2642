import { Box, Button, Typography } from "@mui/material";

export default function MenuButtonView() {
  const buttonContainerStyle = {
    marginX: "auto",
    textAlign: "center",
  };

  const buttonStyle = {
    height: "4rem",
    width: "16rem",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Box sx={buttonContainerStyle}>
        <Button
          sx={buttonStyle}
          href="/factOrFiction"
          variant="contained"
          size="large"
        >
          Fact or Fiction
        </Button>
        <Typography variant="subtitle1">
          Guess the truth behind every nation
        </Typography>
      </Box>

      <Box sx={buttonContainerStyle}>
        <Button
          sx={buttonStyle}
          href="/categoryQuest"
          variant="contained"
          size="large"
        >
          Category Quest
        </Button>
        <Typography variant="subtitle1">
          Explore, Guess, and Conquer Every Statistic!
        </Typography>
      </Box>

      <Box sx={buttonContainerStyle}>
        <Button
          sx={buttonStyle}
          href="/countryQuest"
          variant="contained"
          size="large"
        >
          Country Quest
        </Button>
        <Typography variant="subtitle1">
          Discover the World, One Flag at a Time
        </Typography>
      </Box>
    </Box>
  );
}
