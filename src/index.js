import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import maps from './components/maps'
import old_maps from './components/old_maps';

import './index.css';
import 'leaflet/dist/leaflet.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);