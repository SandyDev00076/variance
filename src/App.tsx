import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/globals.scss';
import './App.css';
import ZoneList from './components/ZoneList';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <ZoneList />
    </div>
  );
}

export default App;
