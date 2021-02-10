import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import { observer } from 'mobx-react-lite';
import { timezoneStore } from '../../stores/timezones.store';
import NoZones from '../NoZones';

import styles from './ZoneList.module.scss';
import ZoneCard from '../ZoneCard';

dayjs.extend(timezone);

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
