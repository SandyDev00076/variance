import React, { useEffect, useMemo, useState } from 'react';
import type { City } from '../../../types/City';
import { getTimeFromZone, whetherDay } from '../../utils';
import Funky from '../Funky';
import NightIcon from '../../assets/icons/nightlight-24px.svg';
import LeftIcon from '../../assets/icons/chevron_left-24px.svg';
import RightIcon from '../../assets/icons/chevron_right-24px.svg';
import DeleteIcon from '../../assets/icons/delete-20px.svg';
import DayIcon from '../../assets/icons/wb_sunny-24px.svg';
import clsx from 'clsx';
import Tooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';
import { cityStore } from '../../stores/cities.store';

import styles from './ZoneCard.module.scss';

interface Props {
  city: City;
  timeLapsed: number;
  timeInput: string | null;
}
const ZoneCard = ({ city, timeLapsed, timeInput }: Props) => {
  const [timeString, setTimeString] = useState(getTimeFromZone(city.timezone));

  useEffect(() => {
    setTimeString(getTimeFromZone(city.timezone));
  }, [timeLapsed]);

  const isDay = useMemo(() => {
    if (timeInput !== null) return whetherDay(timeInput);
    return whetherDay(timeString);
  }, [timeString, timeInput]);

  const timeToShow = useMemo(() => {
    if (timeInput !== null) return getTimeFromZone(city.timezone, timeInput);
    return timeString;
  }, [timeInput, timeString]);

  return (
    <Funky>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.cityName}>{city.city}</div>
          <div className={styles.timezone}>{city.timezone}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.time}>{timeToShow}</div>
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
        <div className={styles.actions}>
          <button onClick={() => cityStore.shiftLeft(city.id)}>
            <LeftIcon />
          </button>
          <button onClick={() => cityStore.shiftRight(city.id)}>
            <RightIcon />
          </button>
          <button onClick={() => cityStore.removeCity(city.id)}>
            <DeleteIcon />
          </button>
        </div>
      </section>
    </Funky>
  );
};

export default ZoneCard;
