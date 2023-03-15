import React, {Component} from 'react';
import './App.css';
import Old_maps from './components/old_maps';
import Maps from './components/maps';

import 'leaflet/dist/leaflet.css'

export default class App extends Component{
  render() {
    return (
    <div>
      <Maps />
    </div>
    )
  }
}