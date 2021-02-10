import React from 'react';
import Funky from '../Funky';

import styles from './ZoneCard.module.scss';

interface Props {
  zone: string;
}
const ZoneCard = ({ zone }: Props) => {
  return (
    <Funky>
      <section className={styles.container}>{zone}</section>
    </Funky>
  );
};

export default ZoneCard;
