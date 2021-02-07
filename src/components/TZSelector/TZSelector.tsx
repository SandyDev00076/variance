import React, { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import useTZSearch from '../../hooks/useTZSearch';

import '@reach/combobox/styles.css';
import styles from './TZSelector.module.scss';

const TZSelector = () => {
  const [inp, setInp] = useState('');

  const results = useTZSearch(inp);

  return (
    <section className={styles.container}>
      <div className={styles.addAZone}>Add a Zone</div>
      <Combobox aria-label="Choose a zone">
        <ComboboxInput
          placeholder="Type here"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        {results && (
          <ComboboxPopover>
            <ComboboxList>
              {results.map((tz) => (
                <ComboboxOption key={tz} value={tz} />
              ))}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
    </section>
  );
};

export default TZSelector;
