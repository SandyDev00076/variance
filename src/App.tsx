import React from 'react';
import './styles/globals.scss';
import ZoneList from './components/ZoneList';
import TZSelector from './components/TZSelector';
import Header from './components/Header';
import Converter from './components/Converter';

import styles from './App.module.scss';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className={styles.App}>
      <Header />
      <Converter onValidTimeInput={(k) => console.log(k)} />
      <ZoneList />
      <TZSelector />
    </div>
  );
}

export default App;
