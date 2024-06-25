export type CountryData = {
  href: string;
  name: {
    common: string;
    official: string;
    nativeName: Array<object>;
    translations: Array<object>;
  };
  tld: Array<string>;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  fifa: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Array<{
    name: string;
    alphaCode: string;
    symbol: string;
  }>;
  idd: object;
  capital: [
    {
      name: string;
      latLng: {
        lat: number;
        lng: number;
      };
    }
  ];
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  continents: Array<string>;
  languages: Array<{
    code: string;
    name: string;
  }>;
  latLng: {
    lat: number;
    lng: number;
  };
  landlocked: string;
  area: number;
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  demonyms: Array<{
    langCode: string;
    f: string;
    m: string;
  }>;
  coatOfArms: {
    png: string;
    svg: string;
  };
  population: number;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  gini: {
    value: number;
    year: number;};
  car: {
    side: string;
  };
  timezones: Array<string>;
  startOfWeek: string;
  postalCode: object;
  gdp: {
    currency: string;
    value: number;
    year: number;
  };
};
