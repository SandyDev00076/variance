import clsx from 'clsx';
import React from 'react';

import styles from './Funky.module.scss';

interface Props {
  children: React.ReactNode;
  index: number;
}
const Funky = ({ children, index }: Props) => {
  function getFunkyBorderClass() {
    switch (index % 4) {
      case 0:
        return styles.purpleBlueGreen;
      case 1:
        return styles.blueBluePink;
      case 2:
        return styles.greenPinkYellow;
      case 3:
        return styles.greenPinkViolet;
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={clsx(styles.coloredBorders, getFunkyBorderClass())} />
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Funky;
