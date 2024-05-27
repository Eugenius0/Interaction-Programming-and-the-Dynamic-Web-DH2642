import { ThemeProvider, createTheme } from "@mui/material/styles";
import FactOrFictionPresenter from "./presenter/factOrFictionPresenter";
import MenuPresenter from "./presenter/menuPresenter";
import FullLeaderboardPresenter from "./presenter/fullLeaderboardPresenter";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorPagePresenter from "./presenter/errorPagePresenter";
import NavbarPresenter from "./presenter/navbarPresenter";
import { Model } from "./model/Model";
import { colorPalette } from "./globals";
import CountryQuestPresenter from "./presenter/countryQuestPresenter";
import CategoryQuestPresenter from "./presenter/categoryQuestPresenter";
import { ConfirmProvider } from "material-ui-confirm";
import { observer } from "mobx-react-lite";
import { AuthLayer } from "./AuthLayer";

type Props = {
  model: Model;
};

const Root = observer((props: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: colorPalette.primary,
      },
      secondary: {
        main: colorPalette.secondary,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        <BrowserRouter>
          <AuthLayer model={props.model}>
            <NavbarPresenter model={props.model} />
            <Routes>
              <Route
                path="/factOrFiction"
                element={<FactOrFictionPresenter model={props.model} />}
              />
              <Route
                path="/categoryQuest/*"
                element={<CategoryQuestPresenter model={props.model} />}
              />
              <Route
                path="/countryQuest"
                element={<CountryQuestPresenter model={props.model} />}
              />
              <Route path="/" element={<MenuPresenter model={props.model} />} />
              <Route
                path="/leaderboard"
                element={<FullLeaderboardPresenter model={props.model} />}
              />
              <Route path="/error" element={<ErrorPagePresenter />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AuthLayer>
        </BrowserRouter>
      </ConfirmProvider>
    </ThemeProvider>
  );
});

export default Root;
