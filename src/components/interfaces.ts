export interface CountryInfo {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  flags: { svg: string; png: string; alt: string };
  coatOfArms: { svg: string };
  capital: string[];
  languages: { [key: string]: string };
  continents: string[];
  population: string;
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  postalCode: { format: string };
  maps: { googleMaps: string; openStreetMaps: string };
  borders: string[];
  region:string;
  subregion:string;
}

