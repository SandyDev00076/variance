import { makeAutoObservable } from 'mobx';

class TimeZones {
  timezones: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTimezones(timezones: string[]) {
    this.timezones = timezones;
  }
}

const timezoneStore = new TimeZones();

export { timezoneStore };
