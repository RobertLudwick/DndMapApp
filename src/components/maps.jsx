import React, { Component } from "react";
import ScriptTag from 'react-script-tag'
import 'leaflet/dist/leaflet.css'
import '../Style/map.css';

export default class Maps extends Component{

    render(){
        return (
            <div>
                <ScriptTag type="text/javascript" src="./Javascript/maptest.js" />
            </div>
        )
    }

}
