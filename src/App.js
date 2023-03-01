import React, {Component} from 'react';
import './App.css';
import {MapContainer, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

class App extends Component{
  render() {
    return (
    <MapContainer className='map' center={[0, 0]} zoom={0} scrollWheelZoom={false}>
    <TileLayer
      url= 'public/Maps/TileGroup0/{z}{x}{y}.png'
    />
  </MapContainer> 
    )
  }
}

export default App;
