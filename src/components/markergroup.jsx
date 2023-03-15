import React, { Component, useEffect, useState } from "react";
import {Marker, Popup} from 'react-leaflet'
import Papa from "papaparse";

import 'leaflet/dist/leaflet.css';
import '../Style/map.css';
import Groteappelde from './Data/Groteappelde.csv';

const Markergroup = (props) => {   
    // This state will store the parsed data
    const [data, setData] = useState([]);
    const [file, setFile] = useState("");

    const position = [40.600699, -74.252789]

    const handleParse = () => {
        const inputFile = Groteappelde;
        setFile(inputFile);
        // Event listener on reader when the file
        // loads, we parse it and set the data.
        const csv = Papa.parse(inputFile, { header: true });
        const parsedData = csv?.data;
        console.log(csv)
        //const columns = Object.keys(parsedData[0]);
        //setData(columns);
    };

    useEffect(() => {
        handleParse();
      }, [])
        
    return (

        <div>
            <Marker position={position}></Marker>
        </div>

        )
    }

export default Markergroup;