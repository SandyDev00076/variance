import lf from 'localforage';
import type { City } from 'types/City';

export async function getCitiesFromLocal(): Promise<City[]> {
  const citiesString = await lf.getItem<string>('variance-cities');
  if (!citiesString) return [];
  return JSON.parse(citiesString) as City[];
}

export function setCitiesToLocal(cities: City[]) {
  const citiesString = JSON.stringify(cities);
  lf.setItem('variance-cities', citiesString);
}
