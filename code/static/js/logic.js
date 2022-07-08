// Creating the map object
var myMap = L.map("map", {
    center: [39.997940, -102.050894],
    zoom: 4.6

});
  
  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
        }
    }).addTo(myMap);
});
  