import React, {Component} from 'react';
import './App.css';
import {MapContainer, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

class App extends Component{
  render() {
    return (
    <MapContainer className='map' center={[1, 1]} zoom={0} scrollWheelZoom={false}>
    <TileLayer
      url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup0/{z}-{x}-{y}.png'
    />
  </MapContainer> 
    )
  }
}

export default App;