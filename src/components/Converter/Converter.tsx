import React from 'react';

import styles from './Converter.module.scss';

const Converter = () => {
  return (
    <section className={styles.container}>
      <div className={styles.convertTime}>Convert</div>
      <input placeholder="HH:mm:ss (24h)" className={styles.timeInput} />
    </section>
  );
};

export default Converter;
