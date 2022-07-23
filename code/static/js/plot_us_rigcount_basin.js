var x1=[];
var y1=[];
var z1=[];
var basin_list = ["Ardmore Woodford", "Arkoma Woodford","Barnett","Cana Woodford","DJ-Niobrara","Eagle Ford","Fayetteville","Granite Wash", "Haynesville", "Marcellus","Mississippian","Permian","Utica","Williston"];
var basin_data = {};
d3.json("/rig").then(function(data){
    console.log(data);
    data.forEach(function(currentValue){
        if ((currentValue.Basin_Name) in basin_data){
            basin_data[currentValue.Basin_Name]['x'].push(currentValue.Date);
            basin_data[currentValue.Basin_Name]['y'].push(currentValue.Rig_Count);
            basin_data[currentValue.Basin_Name]['z'].push(currentValue.Size);
            
        }
        else {
            basin_data[currentValue.Basin_Name]={
                'x':[currentValue.Date],
                'y':[currentValue.Rig_Count],
                'z':[currentValue.Size]
            };
            
        }
        // if (currentValue.Basin_Name == "Ardmore Woodford"){
        //     x1.push(currentValue.Date)
        //     y1.push(currentValue.Rig_Count)
        //     z1.push(currentValue.Size)
        // }
    });
    console.log(basin_data)
});

var traces = [{
    x: basin_data["Permian"].x,
    y: basin_data["Permian"].y,
    mode: 'markers',
      name: 'Permian Rig Count', 
      marker:{
     size: basin_data["Permian"].z, 
     colorscale: 'Earth',
  }
}]; 
Plotly.newPlot('plot4x', traces, 
          {title: 'my try for plotting CSV from AJAX call'});
console.log(traces)