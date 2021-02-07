import { makeAutoObservable } from 'mobx';

class TimeZones {
  timezones: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setTimezones(timezones: string[]) {
    this.timezones = timezones;
  }

  addTimezone(timezone: string) {
    this.timezones = [...this.timezones, timezone];
  }
}

const timezoneStore = new TimeZones();

export { timezoneStore };
