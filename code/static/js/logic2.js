d3.csv("./static/data/biden_approval.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
    }
  
    var x = unpack(rows, 'Date')
    var y = unpack(rows, 'Relative_Approval')
  
    var trace = {
      type: "scatter",
      mode: "lines",
      name: 'AAPL Volume',
      x: x,
      y: y,
      line: {color: 'grey'}
    }
  
    var data = [trace];
  
  var layout = {
    title: 'Volume of Apple Shares Traded',
    xaxis: {
      title: 'AXIS TITLE',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickangle: 'auto',
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 14,
        color: 'black'
      },
      exponentformat: 'e',
      showexponent: 'all'
    },
    yaxis: {
      title: 'AXIS TITLE',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 14,
        color: 'black'
      },
      exponentformat: 'e',
      showexponent: 'all'
    }
  };
  
  Plotly.newPlot('plot', data, layout);
  });
  