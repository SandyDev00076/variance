import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import lf from 'localforage';

lf.config({
  name: 'Variance',
  storeName: 'zones',
  description: 'Storage for timezones',
  driver: lf.INDEXEDDB,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

/**
 * PWA Support added from CRA
 */
serviceWorkerRegistration.register();
