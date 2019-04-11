L.mapbox.accessToken = 'your_token';
// This is an example using geo-viewport. See the full docs for full details
// https://github.com/mapbox/geo-viewport

// A bounding box in west, south, east, north order.
var bounds = [
    5.668343999999995,
    45.111511000000014,
    5.852471999999996,
    45.26800200000002
];

var bounds = [
    21.01870,
    52.06511,
    21.03063,
    52.07282
];


// The size of the desired map.
var size = [400, 400];

// Calculate a zoom level and centerpoint for this map.
//var vp = geoViewport.viewport(bounds, size);

var minzoom = 0, maxzoom = 20, tileSize = 512, allowFloat = true;
var vp = geoViewport.viewport(bounds, size, minzoom, maxzoom, tileSize, allowFloat);
console.log(vp);

// Construct a static map url
// https://docs.mapbox.com/api/maps/#static
document.getElementById('static-map').src =
    'https://api.mapbox.com/v4/examples.map-zr0njcqy/' +
    vp.center.join(',') + ',' +
    vp.zoom + '/' +
    size.join('x') + '.png' +
    '?access_token=' + L.mapbox.accessToken;
