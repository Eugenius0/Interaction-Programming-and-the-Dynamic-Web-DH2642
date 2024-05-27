import { getCountryData } from "../../api/apiSource";
import { CountryData } from "../../api/types";
import { GameState } from "../types/gameStateTypes";
import { defaultGame } from "./gameHelpers";

export function getCategoryQuestGameState(): Promise<GameState> {
  const gameState: GameState = defaultGame;
  return getCountryData().then(getFactsACB);

  function getFactsACB(countryDataArray: CountryData[]) {
    const randomCountry = Math.floor(Math.random() * countryDataArray.length);
    gameState.deck = [
      {
        factString: "Guess the Population",
        correctFact: [countryDataArray[randomCountry].population.toString()],
      },
      {
        factString: "Guess the Capital City",
        correctFact: [countryDataArray[randomCountry].capital[0].name],
      },
      {
        factString:
          "Guess the GDP in " + countryDataArray[randomCountry].gdp.currency,
        correctFact: [countryDataArray[randomCountry].gdp.value.toString()],
      },
      {
        factString: "Guess the Surface Area in km^2",
        correctFact: [countryDataArray[randomCountry].area.toString()],
      },
      {
        factString: "Guess the Currency",
        correctFact: [countryDataArray[randomCountry].currencies[0].name],
      },
      {
        factString: "Guess the Continent",
        correctFact: countryDataArray[randomCountry].continents,
      },
    ];
    gameState.categoryCountry =
      countryDataArray[randomCountry].name.common;
    gameState.categoryCountryFlag = countryDataArray[randomCountry].flags.png;
    return gameState;
  }
}
