import React, { Component } from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import Markergroup from "./markergroup";

import 'leaflet/dist/leaflet.css';
import '../Style/map.css';

const position = [40.600699, -74.252789]

export default class Maps extends Component{
    render(){
        return (
          <div>
          <MapContainer ref='leaflet-map' className='map' center={[40.600699, -74.252789]} zoom={15} minZoom={11} maxZoom={16} scrollWheelZoom={false} >
            <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/TestTile/MapTilerTest-Tile5/{z}/{x}/{y}.png' noWrap={true}/>
            <Markergroup/>
          </MapContainer>

          
          </div>
        )
    }

}
