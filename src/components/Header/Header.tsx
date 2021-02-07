import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

import styles from './Header.module.scss';

dayjs.extend(timezone);

const Header = () => {
  const currentTimezone = dayjs.tz.guess();

  return (
    <header className={styles.container}>
      <h1 className={styles.appName}>Variance</h1>
      <div className={styles.currTZ}>{currentTimezone}</div>
    </header>
  );
};

export default Header;
