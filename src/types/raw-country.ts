// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

import rawAllCountries from "../constants/raw-all-countries.json";

export type RawCountry = typeof rawAllCountries[number];

export interface _RawCountry {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: Subregion;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: { eng: Demonyms; fra?: Demonyms };
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: { png: string; svg: string };
  coatOfArms: { png?: string; svg?: string };
  startOfWeek: StartOfWeek;
  capitalInfo: { latLng?: number[] };
  postalCode?: PostalCode;
  borders?: string[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  [key: string]: {
    name: string;
    symbol?: string;
  };
}

export interface Demonyms {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum Subregion {
  "Australia and New Zealand",
  "Caribbean",
  "Central America",
  "Central Asia",
  "Central Europe",
  "Eastern Africa",
  "Eastern Asia",
  "Eastern Europe",
  "Melanesia",
  "Micronesia",
  "Middle Africa",
  "North America",
  "Northern Africa",
  "Northern Europe",
  "Polynesia",
  "South America",
  "South-Eastern Asia",
  "Southeast Europe",
  "Southern Africa",
  "Southern Asia",
  "Southern Europe",
  "Western Africa",
  "Western Asia",
  "Western Europe",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
