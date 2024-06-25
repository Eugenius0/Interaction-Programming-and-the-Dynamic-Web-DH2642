import { ToggleButtonGroup, ToggleButton, useThemeProps } from "@mui/material";
import { colorPalette } from "../../globals";

type TabViewProps = {
  selectedCategory: string;

  onCategoryChange: (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    category: any
  ) => void;
};

export default function TabView(props: TabViewProps) {
  const toggleButtons = {
    display: "flex",
    justifyContent: "center",
  };

  const activeToggleButton = {
    "&.Mui-selected": {
      color: colorPalette.black,
      backgroundColor: colorPalette.primary,
      "&:hover": {
        color: colorPalette.black,
        backgroundColor: colorPalette.primary,
      },
    },
  };
  return (
    <ToggleButtonGroup
      color="primary"
      sx={toggleButtons}
      value={props.selectedCategory}
      exclusive
      onChange={props.onCategoryChange}
    >
      <ToggleButton value="factOrFiction" sx={activeToggleButton}>
        Fact or Fiction
      </ToggleButton>
      <ToggleButton value="categoryQuest" sx={activeToggleButton}>
        Category Quest
      </ToggleButton>
      <ToggleButton value="countryQuest" sx={activeToggleButton}>
        Country Quest
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
