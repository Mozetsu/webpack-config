import React from 'react';
import ReactDOM from 'react-dom/client';
import AwesomeApp from './components/AwesomeApp';
import './styles.css';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AwesomeApp />
  </React.StrictMode>,
);
