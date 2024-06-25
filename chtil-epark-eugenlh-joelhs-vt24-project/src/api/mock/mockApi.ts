import { CountryData } from "../types";
import { fakeData } from "./data/mockCountryData";

export function queryMockSource(delay: number): Promise<Response> {
  const fakeResponse: Response = {
    json(): Promise<CountryData[]> {
      return Promise.resolve(fakeData);
    },
  } as Response;
  const result: Promise<Response> = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(fakeResponse);
    }, delay);
  });
  return result;
}
