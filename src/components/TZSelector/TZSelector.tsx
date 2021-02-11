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
import { cityStore } from '../../stores/cities.store';
import uid from 'uniqid';
import type { City } from '../../../types/City';

import '@reach/combobox/styles.css';
import styles from './TZSelector.module.scss';

const TZSelector = () => {
  const [inp, setInp] = useState('');

  const results = useTZSearch(inp);

  function addTimezone(cityObj: string) {
    const cityToAdd = JSON.parse(cityObj) as {
      city: string;
      timezone: string;
    };
    cityStore.addCity({
      id: uid('variance-'),
      city: cityToAdd.city,
      timezone: cityToAdd.timezone,
    });
    setInp('');
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
                <ComboboxOption key={index} value={JSON.stringify(tz)}>
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
