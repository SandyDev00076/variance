import React, { useEffect, useState } from 'react';
import { getTimeFromZone } from '../../utils';
import Funky from '../Funky';

import styles from './ZoneCard.module.scss';

interface Props {
  zone: string;
}
const ZoneCard = ({ zone }: Props) => {
  const [timeString, setTimeString] = useState(getTimeFromZone(zone));

  useEffect(() => {
    const interval = setInterval(
      () => setTimeString(getTimeFromZone(zone)),
      1000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Funky>
      <section className={styles.container}>{timeString}</section>
    </Funky>
  );
};

export default ZoneCard;
