import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Globals } from './components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globals />
    <App />
  </React.StrictMode>
);
