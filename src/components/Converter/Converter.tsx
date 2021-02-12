import { Observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { cityStore } from '../../stores/cities.store';
import { isValidTimeString } from '../../utils';

import styles from './Converter.module.scss';

interface Props {
  onValidTimeInput: (k: string) => void;
}
const Converter = ({ onValidTimeInput }: Props) => {
  const [str, setStr] = useState('');

  useEffect(() => {
    if (isValidTimeString(str)) onValidTimeInput(str);
  }, [str]);

  return (
    <section className={styles.container}>
      <div className={styles.convertTime}>Convert</div>
      <Observer>
        {() => (
          <input
            placeholder="HH:mm:ss (24h)"
            className={styles.timeInput}
            value={str}
            onChange={(e) => setStr(e.target.value)}
            readOnly={cityStore.cities.length === 0}
          />
        )}
      </Observer>
    </section>
  );
};

export default Converter;
