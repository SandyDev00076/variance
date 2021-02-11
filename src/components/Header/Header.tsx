import React from 'react';
import { getLocalTimezone } from '../../utils';

import styles from './Header.module.scss';

const Header = () => {
  const currentTimezone = getLocalTimezone();

  return (
    <header className={styles.container}>
      <h1 className={styles.appName}>Variance</h1>
      <div className={styles.currTZ}>{currentTimezone}</div>
    </header>
  );
};

export default Header;
