function makeplot() {
    
    d3.csv("./static/data/us_prod/woodf2.csv")
         .then(function(data){ processData(data) } );
    };
       
      function processData(allRows) {
      
        // console.log(allRows);
        var x = [], y = []; z1=[]; bn=[];x1 = [], y1 = []; z2=[]; bn1=[];
        var traces={}; trace1 = {}; layout = {};
        for (var i=0; i<allRows.length; i++) {
          row = allRows[i];
            let basins = row['basins']
                if (basins == "Woodford_OK"){
                x.push( row['period'] );
                y.push( row['value'] );
                z1.push(row ['size']); 
                bn.push(row['basins'])
                }

                if (basins == "Haynesville"){
                
                x1.push( row['period'] );
                y1.push( row['value'] );
                z2.push(row ['size']); 
                bn1.push(row['basins'])
                }

           
        
            // console.log(bn);
            // for (j=0; j< bn.length; j++){
            //     basin = bn[i];
            //     if (basin == 'Woodford_OK'){
            //         var x1 = [];bn1=[];
            //         x1.push(row['period'])
            //         bn1.push(row['basins'])
            //     }
            // };
        }
        // console.log(x1,y1, z2,bn1) 

        
       
        // console.log( 'X',x, 'Y',y, 'SIZE', z1 );
        makePlotly( x, y, z1, x1, y1, z2 );
      }
      
      // function makePlotly( x, y, x1, y1, z1, z2){
      function makePlotly( x, y){
        var plotDiv = document.getElementById("plot");
        
        var traces = [{
          x: x,
          y: y,
          mode: 'markers',
            name: 'Woodford Production Data', 
            marker:{
           size: z1, 
           colorscale: 'Earth',
        }
    }]
        var plotDiv = document.getElementById("plot");
        var trace1 = [{
            x: x1,
            y: y1,
            mode: 'markers',
              name: 'Haynesville Production Data', 
              marker:{
             size: z2, 
             colorscale: 'Earth',
       
       }
        }];

        var layout = {
            xaxis: {
              type: 'date',
              title: 'Date',
              tickmode:'linear', 
            //   tick0: '2008-01-01',
            //   dtick: 30 * 24 * 60 * 60 * 5000
              
            },
            yaxis: {title: 'US Oil Prod by basin', 
            autorange: true,
            },
        };
    
    var tracedata = [traces, trace1]
    console.log(tracedata)
        Plotly.newPlot('myDiv', traces, 
          {title: 'my try for plotting CSV from AJAX call'});
      };
        makeplot();