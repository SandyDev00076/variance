import React from 'react';

import styles from './Funky.module.scss';

interface Props {
  children: React.ReactNode;
}
const Funky = ({ children }: Props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.coloredBorders} />
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Funky;
