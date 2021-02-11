import React, { useEffect, useState } from 'react';
import type { City } from '../../../types/City';
import { getTimeFromZone } from '../../utils';
import Funky from '../Funky';

import styles from './ZoneCard.module.scss';

interface Props {
  city: City;
}
const ZoneCard = ({ city }: Props) => {
  const [timeString, setTimeString] = useState(getTimeFromZone(city.timezone));

  useEffect(() => {
    const interval = setInterval(
      () => setTimeString(getTimeFromZone(city.timezone)),
      1000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Funky>
      <section className={styles.container}>
        <div className={styles.cityName}>{city.city}</div>
      </section>
    </Funky>
  );
};

export default ZoneCard;
