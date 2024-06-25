import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Paper } from "@mui/material";

export type FactCardProps = {
  children: ReactJSXElement;
};

export function FactCard(props: FactCardProps) {
  return (
    <Paper
      elevation={4}
      sx={(theme) => {
        return {
          height: "100%",
          width: "100%",
          minHeight: "16rem",
          margin: "auto",
          backgroundColor: theme.palette.primary.light,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        };
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          paddingX: "0.5rem",
        }}
      >
        {props.children}
      </Box>
    </Paper>
  );
}
