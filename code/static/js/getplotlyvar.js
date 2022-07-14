var date1=[];
var rating=[];
// var rating
d3.csv("./static/data/oil_price_js.csv").then(function(data){
    data.map(function(d){
        // rating.push(parseInt(d.Relative_Approval));
        rating.push(parseFloat(d.oil_price));
        var parts = d.Date.split('-');
// Please pay attention to the month (parts[1]); JavaScript counts months from 0:
// January - 0, February - 1, etc.
        var mydate = new Date(parts[0], parts[1]-1, parts[2]).toLocaleDateString('en-CA');
        // .toLocaleDateString('en-US')
        date1.push(mydate)
        // console.log(mydate) 
          
    });
});


var trace1 =[{
    x:date1, 
    y:rating, 
    mode: 'lines',
    type: 'scatter',
    // name: '2021'

}];

var data2 = [trace1];
  
  var layout = {
    xaxis: {
      type: 'date',
      title: 'Voting Dates',
      autorange: false, 
      range: ["2021-01-01", "2022-7-12"],
    },
    yaxis: {
      title: 'Presidential Approval Rating'
    },
    title:'Presidential Apporval Rating & Oil Price'
  };
  
  // Plotly.newPlot('plot', data2, layout);
console.log(data2)
console.log(typeof date1)
console.log(typeof rating)

