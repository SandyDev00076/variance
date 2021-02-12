export function getTimeFromZone(zone: string) {
  const currDate = new Date().toLocaleString('en-US', {
    timeZone: zone,
  });
  const newDate = new Date(currDate);
  const hours = `${newDate.getHours()}`.padStart(2, '0');
  const mins = `${newDate.getMinutes()}`.padStart(2, '0');
  const secs = `${newDate.getSeconds()}`.padStart(2, '0');
  return `${hours}:${mins}:${secs}`;
}

export function getLocalTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function whetherDay(time: string) {
  const hours = parseInt(time.split(':')[0]);
  return hours >= 6 && hours < 18;
}
