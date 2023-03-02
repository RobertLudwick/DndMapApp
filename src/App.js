import React, {Component} from 'react';
import './App.css';
import {MapContainer, TileLayer} from 'react-leaflet'
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