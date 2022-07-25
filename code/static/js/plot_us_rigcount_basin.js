var x1=[]; var y1=[]; var z1=[];
var basin_list = ["Ardmore Woodford", "Arkoma Woodford","Barnett","Cana Woodford","DJ-Niobrara","Eagle Ford","Fayetteville","Granite Wash", "Haynesville", "Marcellus","Mississippian","Permian","Utica","Williston"];
var basin_data = {};
d3.json("/rig").then(function(data){
    console.log(data);
    data.forEach(function(currentValue){
        if ((currentValue.Basin_Name) in basin_data){
            basin_data[currentValue.Basin_Name]['x1'].push(currentValue.Date);
            basin_data[currentValue.Basin_Name]['y1'].push(currentValue.Rig_Count);
            basin_data[currentValue.Basin_Name]['z1'].push(currentValue.Size);
            
        }
        else {
            basin_data[currentValue.Basin_Name]={
                'x1':[currentValue.Date],
                'y1':[currentValue.Rig_Count],
                'z1':[currentValue.Size]
            };
            
        }
    });
    // console.log(basin_data)
    // console.log(basin_data.Ardmore.x1)
    abc2()
});
// let oil_price = [];



    // data.map(function(d){

function abc2(){
    var traces = [];
    for (var i=0; i<basin_list.length; i++){
        let t1 = {
            x: basin_data[basin_list[i]].x1,
            y: basin_data[basin_list[i]].y1,
            mode: 'markers',
            name: basin_list[i] + ' Rig Count', 
            marker:{
            size: basin_data[basin_list[i]].z1, 
            colorscale: 'Earth',
            }
        }   

        traces.push(t1)

    }  //end of for
    

    Plotly.newPlot('plot4x', traces,
    {title: 'my try for plotting CSV from AJAX call'});
    // console.log(traces)
};



function abc(){
    // document.getElementById("plot4x") = ;
    var t1 = {
            x: basin_data["Permian"].x1,
            y: basin_data["Permian"].y1,
            mode: 'markers',
            name: 'Permian Rig Count', 
            marker:{
            size: basin_data["Permian"].z1, 
            colorscale: 'Earth',
  }
    }
    var t2 = {
        x: basin_data["Barnett"].x1,
        y: basin_data["Barnett"].y1,
        mode: 'markers',
        name: 'Barnett Rig Count', 
        marker:{
        size: basin_data["Barnett"].z1, 
        colorscale: 'Earth',
}
}

    var trace = [t1, t2]
    // console.log(t1)
    Plotly.newPlot('plot4x', trace, 
          {title: 'my try for plotting CSV from AJAX call'});
}

// var layout = {
//     yaxis2:{
//       title: "Oil Price ",
//       anchor: 'free',
//       overlaying: 'y',
//       side: 'right',
//       position: 1,
//       // Range: [0, 150]
  
//     },
//     // title:'US Oil Rig Count & Oil Price'
//   };
// d3.csv("./static/data/oil_price.csv",function(data1){
//     oil_price = data1
//     console.log(traces)
//     for (var i=0; i<data1.length; i++){


//         let t2 = {
//             x: data1[i].Date,
//             y: data1[i].oil_price,
//             mode: 'lines',
//             type: 'scatter',
//             name: 'Oil Price',
//             yaxis: "y2",
//             color: 'rgb(219, 64, 82)',
            
//         }
//         traces.push(t2)
//     }   //end of for
    
    
// })
// var traces = [{
//     x: basin_data["Ardmore Woodford"].x1,
//     y: basin_data["Ardmore Woodford"].y1,
//     mode: 'markers',
//       name: 'Permian Rig Count', 
//       marker:{
//      size: basin_data["Ardmore Woodford"].z1, 
//      colorscale: 'Earth',
//   }
// }]; 
// console.log(traces)
// Plotly.newPlot('plot4x', traces, 
//           {title: 'my try for plotting CSV from AJAX call'});
// console.log(traces)
// if (currentValue.Basin_Name == "Ardmore Woodford"){
        //     x1.push(currentValue.Date)
        //     y1.push(currentValue.Rig_Count)
        //     z1.push(currentValue.Size)
        // }

        // if ((currentValue.Basin_Name.split(" ")[0]) in basin_data){
        //     basin_data[currentValue.Basin_Name.split(" ")[0]]['x1'].push(currentValue.Date);
        //     basin_data[currentValue.Basin_Name.split(" ")[0]]['y1'].push(currentValue.Rig_Count);
        //     basin_data[currentValue.Basin_Name.split(" ")[0]]['z1'].push(currentValue.Size);
            
        // }
        // else {
        //     basin_data[currentValue.Basin_Name.split(" ")[0]]={
        //         'x1':[currentValue.Date],
        //         'y1':[currentValue.Rig_Count],
        //         'z1':[currentValue.Size]
        //     };
            
        // }