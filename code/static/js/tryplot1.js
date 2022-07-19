function makeplot() {
//     d3.csv("https://raw.githubusercontent.com/jlloydgsu10/Team-Project-3/main/code/static/data/us_prod/woodf1.csv")
//      .then(function(data){ processData(data) } );
  
//   };
d3.csv("./static/data/us_prod/woodf.csv")
     .then(function(data){ processData(data) } );
};
   
  function processData(allRows) {
  
    console.log(allRows);
    var x = [], y = []; z1=[];
  
    for (var i=0; i<allRows.length; i++) {
      row = allRows[i];
      x.push( row['period'] );
      y.push( row['value'] );
      z1.push(row ['size'])
    }
    console.log( 'X',x, 'Y',y, 'SIZE', z1 );

    makePlotly( x, y );
  }
  
  function makePlotly( x, y){
    var plotDiv = document.getElementById("plot");
    var traces = [{
      x: x,
      y: y,
      mode: 'markers',
        name: 'Mississippian Rig Count', 
        marker:{
       size: z1, 
       colorscale: 'Earth',
   
   }
    }];
  
    Plotly.newPlot('myDiv', traces,
      {title: 'my try for plotting CSV from AJAX call'});
  };
    makeplot();