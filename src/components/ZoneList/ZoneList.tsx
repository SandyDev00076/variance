import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import NoZones from '../NoZones';
import ZoneCard from '../ZoneCard';
import { cityStore } from '../../stores/cities.store';
import type { City } from '../../../types/City';

import styles from './ZoneList.module.scss';

interface Props {
  cities: City[];
  timeInput: string | null;
}
const ZoneList = ({ cities, timeInput }: Props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      {cities.length === 0 ? (
        <NoZones />
      ) : (
        <div className={styles.cities}>
          {cities.map((city) => (
            <ZoneCard
              city={city}
              key={city.id}
              timeLapsed={time}
              timeInput={timeInput}
            />
          ))}
        </div>
      )}
    </section>
  );
};

interface ConnectedProps {
  timeInput: string | null;
}
const ConnectedZoneList = observer(({ timeInput }: ConnectedProps) => (
  <ZoneList cities={cityStore.cities} timeInput={timeInput} />
));

export default ConnectedZoneList;
