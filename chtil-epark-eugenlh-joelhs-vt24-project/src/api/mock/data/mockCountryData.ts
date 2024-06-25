import { CountryData } from "../../types";

const mockGermany: CountryData = {
  population: 80000000,
  name: {
    common: "Germany",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "right",
  },
  flag: "🇩🇪",
  capital: [
    {
      name: "Berlin",
    },
  ],
  area: 357.592,
  currencies: [
    {
      name: "euro",
    },
  ],
  gdp: {
    value: 4082000000,
    currency: "USD",
  },
  continents: ["Europe"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
  }
} as CountryData;

const mockIndia: CountryData = {
  population: 1428627663,
  name: {
    common: "India",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "left",
  },
  flag: "🇮🇳",
  capital: [
    {
      name: "New Delhi",
    },
  ],
  area: 3287263,
  currencies: [
    {
      name: "Indian Rupee",
    },
  ],
  gdp: {
    value: 3385090000,
    currency: "USD",
  },
  continents: ["Asia"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png"
  }
} as CountryData;

const mockChina: CountryData = {
  population: 1425671352,
  name: {
    common: "China",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "right",
  },
  flag: "🇨🇳",
  capital: [
    {
      name: "Beijing",
    },
  ],
  area: 9596960,
  currencies: [
    {
      name: "Yuan Renminbi",
    },
  ],
  gdp: {
    value: 17963171000,
    currency: "USD",
  },
  continents: ["Asia"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png"
  }
} as CountryData;

const mockUS: CountryData = {
  population: 339996563,
  name: {
    common: "United States",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "right",
  },
  flag: "🇺🇸",
  capital: [
    {
      name: "Washington",
    },
  ],
  area: 9525067,
  currencies: [
    {
      name: "US Dollar",
    },
  ],
  gdp: {
    value: 25462700000,
    currency: "USD",
  },
  continents: ["North America"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png"
  }
} as CountryData;

const mockIndonesia: CountryData = {
  population: 277534122,
  name: {
    common: "Indonesia",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "left",
  },
  flag: "🇮🇩",
  capital: [
    {
      name: "Jakarta",
    },
  ],
  area: 1904569,
  currencies: [
    {
      name: "Rupiah ",
    },
  ],
  gdp: {
    value: 1319100000,
    currency: "USD",
  },
  continents: ["Asia"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/2560px-Flag_of_Indonesia.svg.png"
  }
} as CountryData;

const mockPakistan: CountryData = {
  population: 240485658,
  name: {
    common: "Pakistan",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "left",
  },
  flag: "🇵🇰",
  capital: [
    {
      name: "Islamabad",
    },
  ],
  area: 882363,
  currencies: [
    {
      name: "Pakistan Rupee",
    },
  ],
  gdp: {
    value: 376533000,
    currency: "USD",
  },
  continents: ["Asia"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Pakistan.png/1024px-Flag_of_Pakistan.png"
  }
} as CountryData;

const mockNigeria: CountryData = {
  population: 223804632,
  name: {
    common: "Nigeria",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "left",
  },
  flag: "🇳🇬",
  capital: [
    {
      name: "Abuja",
    },
  ],
  area: 923768,
  currencies: [
    {
      name: "Naira",
    },
  ],
  gdp: {
    value: 477386000,
    currency: "USD",
  },
  continents: ["Africa"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Flag_of_Nigeria.png/1200px-Flag_of_Nigeria.png"
  }
} as CountryData;

const mockBrazil: CountryData = {
  population: 216422446,
  name: {
    common: "Brazil",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "right",
  },
  flag: "🇧🇷",
  capital: [
    {
      name: "Brasilia",
    },
  ],
  area: 8510346,
  currencies: [
    {
      name: "Brazilian Real",
    },
  ],
  gdp: {
    value: 1920096000,
    currency: "USD",
  },
  continents: ["South America"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
  }
} as CountryData;

const mockBangladesh: CountryData = {
  population: 172954319,
  name: {
    common: "Bangladesh",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "left",
  },
  flag: "🇧🇩",
  capital: [
    {
      name: "Dhaka",
    },
  ],
  area: 148460,
  currencies: [
    {
      name: "Taka",
    },
  ],
  gdp: {
    value: 460201000,
    currency: "USD",
  },
  continents: ["Asia"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png"
  }
} as CountryData;

const mockRussia: CountryData = {
  population: 144444359,
  name: {
    common: "Russia",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "right",
  },
  flag: "🇷🇺",
  capital: [
    {
      name: "Moscow",
    },
  ],
  area: 17098246,
  currencies: [
    {
      name: "Russian Ruble",
    },
  ],
  gdp: {
    value: 2240422000,
    currency: "USD",
  },
  continents: ["Europe, Asia"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png"
  }
} as CountryData;

const mockMexico: CountryData = {
  population: 128455567,
  name: {
    common: "Mexico",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "right",
  },
  flag: "🇲🇽",
  capital: [
    {
      name: "Mexico City",
    },
  ],
  area: 1964375,
  currencies: [
    {
      name: "Mexican Peso",
    },
  ],
  gdp: {
    value: 1414187000,
    currency: "USD",
  },
  continents: ["South America"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Mexico.png"
  }
} as CountryData;

const mockSweden: CountryData = {
  population: 10612086,
  name: {
    common: "Sweden",
  },
  unMember: true,
  landlocked: "false",
  car: {
    side: "right",
  },
  flag: "🇸🇪",
  capital: [
    {
      name: "Stockholm",
    },
  ],
  area: 450295,
  currencies: [
    {
      name: "Swedish Krona",
    },
  ],
  gdp: {
    value: 585939000,
    currency: "USD",
  },
  continents: ["Europe"],
  flags:{
    png: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png"
  }
} as CountryData;

export const fakeData: CountryData[] = [
  mockGermany,
  mockIndia,
  mockChina,
  mockUS,
  mockIndonesia,
  mockPakistan,
  mockNigeria,
  mockBrazil,
  mockBangladesh,
  mockRussia,
  mockMexico,
  mockSweden,
];
