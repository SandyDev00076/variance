import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);

const ZoneList = () => {
  useEffect(() => {
    console.log(dayjs.tz.guess());
    console.log(new Date().getTimezoneOffset());
  }, []);
  return <section></section>;
};

export default ZoneList;
