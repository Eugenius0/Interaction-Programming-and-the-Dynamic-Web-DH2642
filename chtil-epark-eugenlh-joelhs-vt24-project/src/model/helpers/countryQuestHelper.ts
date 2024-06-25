import { getCountryData } from "../../api/apiSource";
import { CountryData } from "../../api/types";
import { Fact, GameState } from "../types/gameStateTypes";
import { defaultGame } from "./gameHelpers";

export function getCountryQuestGameState(): Promise<GameState> {
  const gameState: GameState = defaultGame;
  return getCountryData()
    .then((countryDataArray) => shuffleArray(countryDataArray))
    .then(getFactsACB);

  function shuffleArray(array: CountryData[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  function getFactsACB(countryDataArray: CountryData[]) {
    gameState.deck = countryDataArray.map(countryDataCB);
    return gameState;

    function countryDataCB(countryData: CountryData): Fact {
      return {
        factString: countryData.flags.png,
        correctFact: [countryData.name.common],
      };
    }
  }
}
