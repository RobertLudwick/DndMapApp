import React, { Component } from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../Style/map.css';

const position = [51.505, -0.09]

class Old_maps extends Component{
    
    state = {}
    render(){
        return (
            <div>
                {/* <Leaflet.Map ref='leaflet-map' bounds={this.getBounds()} bounds={this.ShowBounds()} boundsOptions={{padding: [50, 50]}} > */}

                <MapContainer ref='leaflet-map' className='map' center={[1, 1]} zoom={0} minZoom={0} maxZoom={5} scrollWheelZoom={false} >
                    <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup0/{z}-{x}-{y}.jpg' noWrap={true}/>
                    <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup1/{z}-{x}-{y}.jpg' noWrap={true}/>
                    <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup2/{z}-{x}-{y}.jpg' noWrap={true}/>
                    <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup3/{z}-{x}-{y}.jpg' noWrap={true}/>
                    <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup4/{z}-{x}-{y}.jpg' noWrap={true}/>
                    <TileLayer url = 'https://raw.githubusercontent.com/RobertLudwick/DndMapApp/main/public/Maps/TileGroup5/{z}-{x}-{y}.jpg' noWrap={true}/>


                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> 
            </div>
	  
        )
    }

}

export default Old_maps;