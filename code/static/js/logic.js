// Creating the map object
var myMap = L.map("map", {
    center: [39, -97],
    zoom: 5.4959

});
myMap.createPane('labels');
myMap.getPane('labels').style.zIndex = 650;
  
  // Adding the tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(myMap);
  
  // Use this link to get the GeoJSON data.
var link = "https://gist.githubusercontent.com/seasmith/5d4eaa8c752dc6223315a5dc7b2798f2/raw/825bed52bd6612ab03f62d730573c7a8fdcf0aad/us_basins.json";

 // Our style object
function chooseColor(thing) {
    if (thing == "Ardmore Woodford") return "yellow";
    else if (thing == "Arkoma Woodford") return "yellow";
    else if (thing == "Barnett") return "orange";
    else if (thing == "Cana Woodford") return "yellow";
    else if (thing == "DJ-Niobrara") return "black";
    else if (thing == "Eagle Ford") return "pink";
    else if (thing == "Fayetteville") return "brown";
    else if (thing == "Granite Wash") return "chartreuse";
    else if (thing == "Haynesville") return "purple";
    else if (thing == "Marcellus") return "blue";
    else if (thing == "Mississippian") return "violet";
    else if (thing == "Permian") return "green";
    else if (thing == "Utica") return "red";
    else if (thing == "Williston") return "aqua";
    // else if (thing == "others") return "brown";
    else return "none";
}
  // Getting our GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        style: function(feature){
            return {
                color: chooseColor(feature.properties.thing),
                // fillcolor: chooseColor(feature.properties.thing),
                fillOpacity: 0.5,
                weight: 1.5
            };
        },
        onEachFeature: function(feature, layer) {
        layer.bindPopup("<h1>" + feature.properties.thing + "</h1> ");
        }
    }).addTo(myMap);

    var marker = new L.marker([27.237698, -99.473009], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Eagle Ford", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([32.160709, -92.839724], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Haynesville", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([31.632453, -99.893885], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Barnett", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([32.889025, -104.310934], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Permian", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([35.404664, -90.132335], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Fayetteville", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([36.922401, -95.338540], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Mississippian", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([34.922401, -105.838540], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Granite Wash", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([35.922401, -80.838540], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Marcellus", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([40.922401, -72.838540], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Utica", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([40.922401, -103.958540], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("DJ-Niobrara", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([45.922401, -102.958540], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip("Williston", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    var marker = new L.marker([33.922401, -96.838540], { opacity: 0.01 }); //opacity may be set to zero
    marker.bindTooltip(" Woodford", {permanent: true, className: "my-label", offset: [0, 0] });
    marker.addTo(myMap);
    // var marker = L.marker([45.52, -122.67], {
    //     draggable: true,
    //     title: "My First Marker"
    //   }).addTo(myMap);
    // // Binding a popup to our marker
    // marker.bindPopup("Hello There!");

    // var myIcon = L.divIcon({className: 'my-div-icon'});
    // L.marker([45.52, -122.67], {opacity: 0}).addTo(myMap);
  //   var middle = [45.52, -122.67]
  //   L.Control.textbox = L.Control.extend({
	// 	onAdd: function(myMap) {
			
	// 	var text = L.DomUtil.create('div');
	// 	text.id = "info_text";
	// 	text.innerHTML = "<strong>Hayneville</strong>"
	// 	return text;
	// 	},

	// 	onRemove: function(myMap) {
	// 		// Nothing to do here
	// 	}
	// }); L.marker - bind it with tooltip()
	// L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
	// L.control.textbox({ position: bottomleft }).addTo(myMap);

   

  

      
      
    

});
  