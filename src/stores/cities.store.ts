import { makeAutoObservable } from 'mobx';
import type { City } from 'types/City';

class CityStore {
  cities: City[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCity(city: City) {
    this.cities = [...this.cities, city];
  }

  removeCity(id: string) {
    const cityToRemove = this.cities.findIndex((city) => city.id === id);
    if (cityToRemove < 0) return;
    const temp = [...this.cities];
    temp.splice(cityToRemove, 1);
    this.cities = temp;
  }

  findCity(id: string) {
    return this.cities.find((city) => city.id === id);
  }

  shiftLeft(id: string) {
    const cityToShift = this.cities.findIndex((city) => city.id === id);
    if (cityToShift <= 0) return;
  }

  shiftRight(id: string) {
    const cityToShift = this.cities.findIndex((city) => city.id === id);
    if (cityToShift < 0 || cityToShift === this.cities.length - 1) return;
  }
}

const cityStore = new CityStore();

export { cityStore };
