import React, { Component } from "react";
import {MapContainer, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../Style/map.css';

class Old_maps extends Component{
    state = {}
    render(){
        return (
            <div>
                <MapContainer className='map' center={[1, 1]} zoom={0} scrollWheelZoom={false} >
                    <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup0/{z}-{x}-{y}.png' noWrap={true}/>
                </MapContainer> 
            </div>
	  
        )
    }

}

export default Old_maps;