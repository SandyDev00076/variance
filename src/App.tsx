import React from 'react';
import './styles/globals.scss';
import ZoneList from './components/ZoneList';
import TZSelector from './components/TZSelector';

import styles from './App.module.scss';
import Header from './components/Header';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className={styles.App}>
      <Header />
      <ZoneList />
      <TZSelector />
    </div>
  );
}

export default App;
