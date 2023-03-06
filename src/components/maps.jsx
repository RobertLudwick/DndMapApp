import React, { Component } from "react";
import 'leaflet/dist/leaflet.css';
import '../Style/map.css';

export default class Maps extends Component{
    render(){
        return (
          <MapContainer ref='leaflet-map' className='map' center={[1, 1]} zoom={0} minZoom={0} maxZoom={5} scrollWheelZoom={false} >
            <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/TestTile/MapTilerTest-Tile5/{z}/{x}/{y}.png' noWrap={true}/>
          </MapContainer>
        )
    }

}
