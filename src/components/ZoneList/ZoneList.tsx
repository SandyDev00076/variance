import React from 'react';
import { observer } from 'mobx-react-lite';
import { timezoneStore } from '../../stores/timezones.store';
import NoZones from '../NoZones';
import ZoneCard from '../ZoneCard';

import styles from './ZoneList.module.scss';

interface Props {
  zones: string[];
}
const ZoneList = ({ zones }: Props) => {
  return (
    <section className={styles.container}>
      {zones.length === 0 ? (
        <NoZones />
      ) : (
        <div className={styles.zones}>
          {zones.map((zone) => (
            <ZoneCard zone={zone} key={zone} />
          ))}
        </div>
      )}
    </section>
  );
};

const ConnectedZoneList = observer(() => (
  <ZoneList zones={timezoneStore.timezones} />
));

export default ConnectedZoneList;
