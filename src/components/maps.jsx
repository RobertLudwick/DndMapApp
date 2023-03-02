import React, { Component } from "react";
import 'leaflet/dist/leaflet.css';
import '../Style/map.css';

export default class Maps extends Component{
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "./Javascript/maptest.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render(){
        return (
            <></>
        )
    }

}
