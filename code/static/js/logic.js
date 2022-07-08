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
//   var link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";
var link = "https://gist.githubusercontent.com/seasmith/5d4eaa8c752dc6223315a5dc7b2798f2/raw/825bed52bd6612ab03f62d730573c7a8fdcf0aad/us_basins.json";

// var basin_feature
// var basin_name

// // Creating a GeoJSON layer with the retrieved data
// d3.json(link).then(function(data) {
//     basin_feature = data.features
//     for (let i=0; i < basin_feature.lenght; i++){
//         let basin_name = features[i].properties.thing; 
//         if (basin_name == "Haynesville") {
//             data1 = features[i].geomtery.coordinates;
//             L.geoJson(data1).addTo(myMap);
//         }
//     }
    
// });
 // Our style object
function chooseColor(thing) {
    if (thing == "Ardmore Woodford") return "yellow";
    else if (thing == "Arkoma Woodford") return "red";
    else if (thing == "Barnett") return "orange";
    else if (thing == "Cana Woodford") return "green";
    else if (thing == "DJ-Niobrara") return "purple";
    else if (thing == "Eagle Ford") return "purple";
    else if (thing == "Fayetteville") return "purple";
    else if (thing == "Granite Wash") return "purple";
    else if (thing == "Haynesville") return "purple";
    else if (thing == "Marcellus") return "purple";
    else if (thing == "Mississippian") return "purple";
    else if (thing == "Permian") return "brown";
    else if (thing == "Utica") return "red";
    else if (thing == "Williston") return "green";
    // else if (thing == "others") return "brown";
    else return "none";
}
  // Getting our GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        style: function(feature){
            return {
                color: "black",
                fillcolor: chooseColor(feature.properties.thing),
                fillOpacity: 0.05,
                weight: 1.5
            };
        }
    }).addTo(myMap);
});
  