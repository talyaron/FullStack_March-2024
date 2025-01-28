export interface CountryProbability {
  country_id: string; 
  probability: number; 
}

export interface Nationality {
  name: string; 
  count: number; 
  countries: CountryProbability[];
}

export const mapApiToNationality = (response: any): Nationality => ({
  name: response.name,
  count: response.count,
  countries: response.country,
});
