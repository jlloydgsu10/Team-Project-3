var date1=[];
var rating=[];
// var rating
d3.json("./static/data/biden_approval.json").then(function(data){

    // var date1 = data.map(function(d){
    //     date1.push(d.Date);
    // console.log(data)
    date1.push(data.Date);
    rating.push(data.Relative_Approval);
    // date1 = data.Date
    // rating = data.Relative_Approval;
    // for (i=0; i< data.lenght; i++){
    //     let dat = Date[i]
        
    //     date1.push(dat)
    // //     console.log(dat)
    // //     date1.append(dat)
    // }
   
});
    console.log(date1)
    var Trace1 = {
        //     // x: unpack(rows, 'Date'),
        //     // y: unpack(rows, 'Relative_Approval'),
        //     // x: [2,3,4],
        //     // y: [4,5,6],
            x: date1, 
            y: rating, 
        //     // x: [1657256400000, 1657170000000], 
        //     // y: [-24, 4],
            type:"scatter",
            mode: 'lines'
        //     // type:"scatter"
        };
        // console.log(date1)
        console.log(Trace1)
        var traceData = [Trace1];
        
        // // // Apply the group barmode to the layout
        let layout = {
          title: "Presidential Approval Rating & Oil Price"
        };
        
        // // Render the plot to the div tag with id "plot"
        
        Plotly.newPlot("plot", traceData, layout);
   
    // }
        
    // console.log(date1)
    
// console.log(date1)
// console.log(rating)

// var Trace1 = {
//     // x: unpack(rows, 'Date'),
//     // y: unpack(rows, 'Relative_Approval'),
//     // x: [2,3,4],
//     // y: [4,5,6],
//     x: date1, 
//     y: rating, 
//     // x: [1657256400000, 1657170000000], 
//     // y: [-24, 4],
//     type:"scatter",
//     mode: 'lines'
//     // type:"scatter"
// };

// var traceData = [Trace1];

// // // Apply the group barmode to the layout
// let layout = {
//   title: "Presidential Approval Rating & Oil Price"
// };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", traceData, layout);

