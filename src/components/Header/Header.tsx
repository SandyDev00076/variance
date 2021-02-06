import React from 'react';
import TimeZoneIcon from '../../assets/icons/watch_later-24px.svg';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.appLine}>
        <TimeZoneIcon className={styles.timeZoneIcon} />
        <h1 className={styles.appName}>Variance</h1>
      </div>
    </header>
  );
};

export default Header;
