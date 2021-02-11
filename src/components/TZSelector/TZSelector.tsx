import React, { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import useTZSearch from '../../hooks/useTZSearch';
import { timezoneStore } from '../../stores/timezones.store';

import '@reach/combobox/styles.css';
import styles from './TZSelector.module.scss';

const TZSelector = () => {
  const [inp, setInp] = useState('');

  const results = useTZSearch(inp);

  function addTimezone(val: string) {
    timezoneStore.addTimezone(val);
  }

  return (
    <section className={styles.container}>
      <div className={styles.addAZone}>Add a City</div>
      <Combobox aria-label="Choose a zone" onSelect={addTimezone}>
        <ComboboxInput
          placeholder="Search here"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        {results && (
          <ComboboxPopover>
            <ComboboxList>
              {results.map((tz, index) => (
                <ComboboxOption key={index} value={tz.timezone}>
                  <div className={styles.option}>
                    <div className={styles.city}>{tz.city}</div>
                    <div className={styles.timezone}>{tz.timezone}</div>
                  </div>
                </ComboboxOption>
              ))}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
    </section>
  );
};

export default TZSelector;
