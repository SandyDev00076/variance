import React, { useEffect, useMemo, useState } from 'react';
import type { City } from '../../../types/City';
import { getTimeFromZone, whetherDay } from '../../utils';
import Funky from '../Funky';
import NightIcon from '../../assets/icons/nightlight-24px.svg';
import DayIcon from '../../assets/icons/wb_sunny-24px.svg';
import clsx from 'clsx';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

import styles from './ZoneCard.module.scss';

interface Props {
  city: City;
  timeLapsed: number;
}
const ZoneCard = ({ city, timeLapsed }: Props) => {
  const [timeString, setTimeString] = useState(getTimeFromZone(city.timezone));

  useEffect(() => {
    setTimeString(getTimeFromZone(city.timezone));
  }, [timeLapsed]);

  const isDay = useMemo(() => {
    return whetherDay(timeString);
  }, [timeString]);

  return (
    <Funky>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.cityName}>{city.city}</div>
          <div className={styles.timezone}>{city.timezone}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.time}>{timeString}</div>
          <Tooltip label={isDay ? 'Day' : 'Night'}>
            <div
              className={clsx(styles.icon, {
                [styles.day]: isDay,
                [styles.night]: !isDay,
              })}
            >
              {isDay ? <DayIcon /> : <NightIcon />}
            </div>
          </Tooltip>
        </div>
      </section>
    </Funky>
  );
};

export default ZoneCard;
