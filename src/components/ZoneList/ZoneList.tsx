import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import TZSelector from '../TZSelector';

import styles from './ZoneList.module.scss';

dayjs.extend(timezone);

const ZoneList = () => {
  return (
    <section className={styles.container}>
      <TZSelector />
    </section>
  );
};

export default ZoneList;
