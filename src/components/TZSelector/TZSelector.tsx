import React, { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import TZList from '../../utils/timeZones';
import useTZSearch from '../../hooks/useTZSearch';

import '@reach/combobox/styles.css';
import styles from './TZSelector.module.scss';

const TZSelector = () => {
  const [inp, setInp] = useState('');

  const results = useTZSearch(inp);

  return (
    <Combobox aria-label="Choose a zone">
      <ComboboxInput value={inp} onChange={(e) => setInp(e.target.value)} />
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
  );
};

export default TZSelector;
