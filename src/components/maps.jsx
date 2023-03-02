import React, { Component } from "react";
import 'leaflet/dist/leaflet.css';
import '../Style/map.css';

const myHTML = `
<html>
<head>
<title>Groteappelde</title>	
<link href="https://unpkg.com/leaflet@1.0.0/dist/leaflet.css" rel="stylesheet" type="text/css" />
<script src="https://unpkg.com/leaflet@1.0.0/dist/leaflet-src.js"></script>

<script src="https://unpkg.com/sql.js@0.3.2/js/sql.js"></script>

<script src="../../node_modules/Leaflet.TileLayer.MBTiles/Leaflet.TileLayer.MBTiles.js"></script>

  <meta charset="utf-8">
  <title>Leaflet.TileLayer.MBTiles demo</title>
  <style>
  body { margin:0; padding:0; }
  #map { position: absolute; top:0; bottom:0; right:0; left:0; }
  #map-title { position: relative; margin-top: 10px; margin-left: 50px; float: left; background: white; border: 2px solid rgba(0,0,0,0.2); padding: 6px 8px; font-family: Helvetica; font-weight: bold; font-size: 24px; z-index: 800; }
  </style>
</head>
<body>
    <div id="map-title">Groteappelde</div>
    <div id='map'></div>



  <script>

    var map = new L.map('map', {
      center: [40.91, -74.00],
      zoom: 15,
      scrollWheelZoom: true
    });
	  
    var mb = L.tileLayer.mbTiles('../../Style/images/Mbtiles/Test Tile.mbtiles', {
		noWrap: true,
		minZoom: 15,
		maxZoom: 17
	}).addTo(map);

	L.marker([40.91, -74.00]).addTo(map)  
	  
	mb.on('databaseloaded', function(ev) {
		console.info('MBTiles DB loaded', ev);
	});
	mb.on('databaseerror', function(ev) {
		console.info('MBTiles DB error', ev);
	});

  </script>
</body>
</html>`;

export default class Maps extends Component{
    render(){
        return (
            <div dangerouslySetInnerHTML={{__html: myHTML}} />
        )
    }

}
