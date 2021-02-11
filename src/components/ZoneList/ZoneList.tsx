import React from 'react';
import { observer } from 'mobx-react-lite';
import NoZones from '../NoZones';
import ZoneCard from '../ZoneCard';
import { cityStore } from '../../stores/cities.store';
import type { City } from '../../../types/City';

import styles from './ZoneList.module.scss';

interface Props {
  cities: City[];
}
const ZoneList = ({ cities }: Props) => {
  return (
    <section className={styles.container}>
      {cities.length === 0 ? (
        <NoZones />
      ) : (
        <div className={styles.cities}>
          {cities.map((city) => (
            <ZoneCard city={city} key={city.id} />
          ))}
        </div>
      )}
    </section>
  );
};

const ConnectedZoneList = observer(() => (
  <ZoneList cities={cityStore.cities} />
));

export default ConnectedZoneList;
