import { getCountryData } from "../../api/apiSource";
import { CountryData } from "../../api/types";
import { Fact, GameState } from "../types/gameStateTypes";
import { defaultGame } from "./gameHelpers";

export function getFactOrFictionGameState(): Promise<GameState> {
  const gameState: GameState = defaultGame;
  return getCountryData().then(generateFactsACB);

  function generateFactsACB(countryDataArray: CountryData[]) {
    gameState.deck = generateFacts(countryDataArray);
    return gameState;
  }
}

function generateFacts(countryDataArray: CountryData[]): Fact[] {
  return countryDataArray.map(countryDataCB);

  function countryDataCB(countryData: CountryData): Fact {
    const categories = ["population", "landlocked", "United Nations", "car"];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];

    let factString: string = "Not valid";
    let correctFact: string = "Fiction";

    switch (randomCategory) {
      case "population":
        [factString, correctFact] = getPopulationFact(
          countryData.name.common,
          countryData.population
        );
        break;
      case "landlocked":
        [factString, correctFact] = getLandLockedFact(
          countryData.name.common,
          countryData.landlocked
        );
        break;
      case "car":
        [factString, correctFact] = getDrivingSideFact(
          countryData.name.common,
          countryData.car.side
        );
        break;
      case "United Nations":
        [factString, correctFact] = getUnMemberFact(
          countryData.name.common,
          countryData.unMember
        );
        break;
    }

    return {
      factString:  factString,
      countryFlag: countryData.flags.png,
      correctFact: [correctFact],
    };
  }
}

function getPopulationFact(country: string, value: number): [string, string] {
  // 50% chance of fake or real value
  const leaveCorrectValue = Math.random() < 0.5;
  const baseString = country + " has a population of: ";

  if (leaveCorrectValue) {
    return [baseString + value.toLocaleString(), "Fact"];
  } else {
    // fake value can deviate for a maximum of 30%
    const maximumDeviation = value * 0.3;
    // should the fake value be higher or lower than the correct value
    const increaseValue = Math.random() < 0.5;
    let deviation = maximumDeviation * Math.random();
    deviation = deviation < 0 ? 0 : Math.floor(deviation);

    const fakeValue = increaseValue ? value + deviation : value - deviation;
    return [baseString + fakeValue.toLocaleString(), "Fiction"];
  }
}

function getLandLockedFact(country: string, value: string): [string, string] {
  const leaveCorrectValue = Math.random() < 0.5;
  let statementTrue = "";
  let statementFalse = "";

  statementTrue =
    value == "true"
      ? country + " is landlocked"
      : country + " is not landlocked";

  statementFalse =
    value == "false"
      ? country + " is landlocked"
      : country + " is not landlocked";

  return leaveCorrectValue
    ? [statementTrue, "Fact"]
    : [statementFalse, "Fiction"];
}

function getDrivingSideFact(country: string, value: string): [string, string] {
  const leaveCorrectValue = Math.random() < 0.5;
  let statementTrue = "";
  let statementFalse = "";

  statementTrue =
    value == "left"
      ? country + " drives on the left side"
      : country + " drives on the right side";

  statementFalse =
    value == "right"
      ? country + " drives on the left side"
      : country + " drives on the right side";

  return leaveCorrectValue
    ? [statementTrue, "Fact"]
    : [statementFalse, "Fiction"];
}

function getUnMemberFact(country: string, value: boolean): [string, string] {
  const leaveCorrectValue = Math.random() < 0.5;

  const statementTrue = value
    ? country + " is a member of the United Nations"
    : country + " is not a member of the United Nations";

  const statementFalse = !value
    ? country + " is a member of the United Nations"
    : country + " is not a member of the United Nations";

  return leaveCorrectValue
    ? [statementTrue, "Fact"]
    : [statementFalse, "Fiction"];
}
