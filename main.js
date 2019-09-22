require([
  // Import Necessary Modules
  "esri/map",
  "esri/layers/FeatureLayer",
  "esri/symbols/SimpleLineSymbol",
  "esri/Color",
  "esri/symbols/SimpleFillSymbol",
  "esri/renderers/SimpleRenderer",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/graphic"
],
function(
  // Pass necessary modules as inputs into the function
  Map,
  FeatureLayer,
  SimpleLineSymbol,
  Color,
  SimpleFillSymbol,
  SimpleRenderer,
  SimpleMarkerSymbol,
  Graphic
) {
// Create a new map centered on boston that has a grey basemap.
  var map = new Map("map", {
    basemap: "gray",
    center: [-71.0589, 42.3301], // center on MO
    zoom: 11
  });
  // create a new feature layer of Boston Police Stations.
  var Bos_Police = new FeatureLayer("https://services2.arcgis.com/yL7v93RXrxlqkeDx/arcgis/rest/services/Boston_PoliceStations/FeatureServer/0");


  // create a new feature layer of all Boston MBTA Lines
  var Bos_MBTA = new FeatureLayer("https://services2.arcgis.com/yL7v93RXrxlqkeDx/arcgis/rest/services/Boston_MBTA/FeatureServer/0");


  // create a new feature layer of all Boston Neighborhoods.
  var Bos_Neighborhoods = new FeatureLayer("https://services2.arcgis.com/yL7v93RXrxlqkeDx/arcgis/rest/services/Boston_Neighborhoods/FeatureServer/0");

// Create a new simple symbol, renderer and then apply that render to the relevant layer
  var line = new SimpleLineSymbol();
  line.setColor(new Color([235, 235, 235, 1]));
  line.setWidth(0.75);
  var fill = new SimpleFillSymbol();
  fill.setColor(new Color([0, 0, 0, 0.53]));
  fill.setOutline(line);

  var fillRenderer = new SimpleRenderer(fill);
  Bos_Neighborhoods.setRenderer(fillRenderer);
  map.addLayer(Bos_Neighborhoods); // add layer to map
// Create a new simple symbol, renderer and then apply that render to the relevant layer
  var marker = new SimpleMarkerSymbol();
  marker.setColor(new Color([26, 26, 26, 1]));
  marker.setSize(8);

  var markerRenderer = new SimpleRenderer(marker);
  Bos_Police.setRenderer(markerRenderer);
  map.addLayer(Bos_Police); // add layer to map

// Create a new simple symbol, renderer and then apply that render to the relevant layer
  var line2 = new SimpleLineSymbol();
  line2.setWidth(2);
  line2.setColor(new Color([168, 0, 0, 0.88]));

  var lineRenderer = new SimpleRenderer(line2);
  Bos_MBTA.setRenderer(lineRenderer);
  map.addLayer(Bos_MBTA); // add layer to map

});
