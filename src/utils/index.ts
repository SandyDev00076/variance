export function getTimeFromZone(zone: string) {
  return '10:30:20';
}

export function getLocalTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
