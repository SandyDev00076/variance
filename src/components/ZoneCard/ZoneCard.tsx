import React, { useEffect, useState } from 'react';
import type { City } from '../../../types/City';
import { getTimeFromZone } from '../../utils';
import Funky from '../Funky';

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

  return (
    <Funky>
      <section className={styles.container}>
        <div className={styles.header}>
          <div className={styles.cityName}>{city.city}</div>
          <div className={styles.timezone}>{city.timezone}</div>
        </div>
        <div className={styles.time}>{timeString}</div>
      </section>
    </Funky>
  );
};

export default ZoneCard;
