export function getTimeFromZone(zone: string, timeToConvert?: string) {
  const currDate = new Date();
  if (timeToConvert !== undefined) {
    const parts = timeToConvert.split(':').map((part) => parseInt(part));
    currDate.setHours(parts[0], parts[1], parts[2]);
  }
  const currDateString = currDate.toLocaleString('en-US', {
    timeZone: zone,
  });
  const newDate = new Date(currDateString);
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

export function isValidTimeString(timeString: string) {
  return /^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]:?[0-5][0-9]+$))/.test(
    timeString,
  );
}
