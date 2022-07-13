var date1=[];
var rating=[];
// var rating
d3.csv("./static/data/biden_approval.csv").then(function(data){
    data.map(function(d){
        // console.log(d.Date)
        // date1 = Date.parse(d.Date);
        // rating = parseInt(d.Relative_Approval);
        // date1.push(Date.parse(d.Date));
        date1.push(Date.parse(d.Date));
        // date1.push(parseInt(d.Date));
        rating.push(parseInt(d.Relative_Approval));
        
    });
});
console.log(date1)
console.log(rating)

var Trace1 = {
    // x: unpack(rows, 'Date'),
    // y: unpack(rows, 'Relative_Approval'),
    // x: [2,3,4],
    // y: [4,5,6],
    x: date1, 
    y: rating, 
    // x: [1657256400000, 1657170000000], 
    // y: [-24, 4],
    type:"scatter",
    mode: 'lines'
    // type:"scatter"
};

var traceData = [Trace1];

// // Apply the group barmode to the layout
let layout = {
  title: "Presidential Approval Rating & Oil Price"
};

// // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);

