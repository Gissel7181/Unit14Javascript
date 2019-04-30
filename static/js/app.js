// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
//console.log(data);

//working!-------------------
 // Step 5: Use d3 to update each cell's text with UFO data.js
 data.forEach(function(UFO) {
   //console.log(UFO);
   var row = tbody.append("tr");
   Object.entries(UFO).forEach(function([key, value]) {
     //console.log(key, value);
     // Append a cell to the row for each value
     // in the UFO report object
     var cell = row.append("td");
     cell.text(value);
   });
 });

// define button 
var button = d3.select("#filter-btn");

//trying to make the button work
 button.on("click", function() {
  d3.event.preventDefault();
  console.log("Hi, a button was clicked!");
  var inputElement = d3.select("#datetime");//define input element
  var inputValue = inputElement.property("value"); // Get the value property of the input element 
  console.log(inputValue); // see in the console the input value on the filter  
  console.log(tableData); // 

  var filteredData = tableData.filter(record => record.datetime === inputValue);
  console.log(filteredData); 

  // clear table to show the filtered data after
  d3.select('tbody').selectAll('tr').remove();
  
  //TODO: improve by storing the function in a variable
  // to show the filtered data
  filteredData.forEach(function(UFO) {
    //console.log(UFO);
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });


});

