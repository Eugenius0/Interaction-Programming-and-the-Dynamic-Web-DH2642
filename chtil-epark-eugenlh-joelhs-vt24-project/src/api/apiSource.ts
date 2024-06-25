import { API_HOST, API_KEY, BASE_URL } from "./apiConfig";
import { CountryData } from "./types";
import { queryMockSource } from "./mock/mockApi";

export function getCountryData() {
  const env = import.meta.env.MODE;
  if (env === "production") {
    return querySource().then(gotResponseACB).then(getCountryACB);
  } else {
    return queryMockSource(500).then(gotResponseACB).then(getCountryACB);
  }
  function gotResponseACB(response: Response) {
    if (response.status >= 300) {
      throw new Error("Something went wrong");
    }
    return response.json();
  }

  function getCountryACB(data: CountryData[]) {
    return data;
  }
}

function querySource() {
  const endpoint = "/country/population?";
  const sortBy = ["capital", "currency", "gdp", "population", "area"];
  const sortOrder = ["asc", "desc"];
  const params = new URLSearchParams({
    offset: Math.floor(Math.random() * 12).toString(),
    limit: "12",
    sortBy: sortBy[Math.floor(Math.random() * sortBy.length)],
    sortOrder: sortOrder[Math.floor(Math.random() * sortOrder.length)],
    minPopulation: "1000000",
  }).toString();
  const url = BASE_URL + endpoint + params;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };
  return fetch(url, options);
}
