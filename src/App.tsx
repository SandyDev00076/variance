import React, { useState } from 'react';
import './styles/globals.scss';
import ZoneList from './components/ZoneList';
import TZSelector from './components/TZSelector';
import Header from './components/Header';
import Converter from './components/Converter';

import styles from './App.module.scss';

interface AppProps {}

function App({}: AppProps) {
  const [timeInput, setTimeInput] = useState<string | null>(null);

  return (
    <div className={styles.App}>
      <Header />
      <Converter onValidTimeInput={(k) => setTimeInput(k)} />
      <ZoneList timeInput={timeInput} />
      <TZSelector />
    </div>
  );
}

export default App;
