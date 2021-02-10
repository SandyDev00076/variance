import React from 'react';

import styles from './NoZones.module.scss';

const NoZones = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.line1}>0 zones found</div>
        <div className={styles.line2}>Add one to get started</div>
      </div>
    </section>
  );
};

export default NoZones;
