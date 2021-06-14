import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'sanitize.css/sanitize.css';

import { App } from 'app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from './reportWebVitals';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>,
  MOUNT_NODE,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
