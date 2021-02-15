import { makeAutoObservable } from 'mobx';
import {
  getCitiesFromLocal,
  setCitiesToLocal,
} from 'src/services/storageService';
import type { City } from 'types/City';

class CityStore {
  cities: City[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCities() {
    this.cities = await getCitiesFromLocal();
  }

  addCity(city: City) {
    this.cities = [...this.cities, city];
    setCitiesToLocal(this.cities);
  }

  removeCity(id: string) {
    const cityToRemove = this.cities.findIndex((city) => city.id === id);
    if (cityToRemove < 0) return;
    const temp = [...this.cities];
    temp.splice(cityToRemove, 1);
    this.cities = temp;
    setCitiesToLocal(this.cities);
  }

  findCity(id: string) {
    return this.cities.find((city) => city.id === id);
  }

  shiftLeft(id: string) {
    const cityToShift = this.cities.findIndex((city) => city.id === id);
    if (cityToShift <= 0) return;
    const toBeSwapped1 = cityToShift;
    const toBeSwapped2 = cityToShift - 1;
    const temp = [...this.cities];
    temp[toBeSwapped1] = this.cities[toBeSwapped2];
    temp[toBeSwapped2] = this.cities[toBeSwapped1];
    this.cities = temp;
    setCitiesToLocal(this.cities);
  }

  shiftRight(id: string) {
    const cityToShift = this.cities.findIndex((city) => city.id === id);
    if (cityToShift < 0 || cityToShift === this.cities.length - 1) return;
    const toBeSwapped1 = cityToShift;
    const toBeSwapped2 = cityToShift + 1;
    const temp = [...this.cities];
    temp[toBeSwapped1] = this.cities[toBeSwapped2];
    temp[toBeSwapped2] = this.cities[toBeSwapped1];
    this.cities = temp;
    setCitiesToLocal(this.cities);
  }
}

const cityStore = new CityStore();

export { cityStore };
