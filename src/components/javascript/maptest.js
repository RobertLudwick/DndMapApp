
    var map = new L.map('map', {
      center: [40.91, -74.00],
      zoom: 15,
      scrollWheelZoom: true
    });
	  
	var mb = L.tileLayer.mbTiles('./Test-Tile4.mbtiles', {
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