
// JS File for hw04                
// Krishanu Datta and Zain Alam
// Last moditifed: 02.14.2023


const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};


// Let's create a visualization with a point for each datum 
// in the following dataset 
const data1 = [(10, 20), (20, 40), (60, 20), (90, 90)];


// Add a new frame for this new visualization
const FRAME2 = d3.select("#vis2") //add a new div for this vis
                                    // to your html 
                  .append("svg")
                    .attr("width", FRAME_WIDTH)
                    .attr("height", FRAME_HEIGHT)
                    .attr("class", "frame"); 


// Now, rebuild 
FRAME2.selectAll("points")  
    .data(data1)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (d[0] + MARGINS.left); }) 
      .attr("cy", (d) => { return (d[1] + MARGINS.top); }) 
      .attr("r", 20)
      .attr("class", "point"); 

//###############################################################
// Mapping pixels to data   
// In addition to binding data to svg's d3 will do the math 
// to map data values to pixel values.  
//###############################################################

// Let's make a vis with the following data 
const data2 = [10000, 20000, 40000]; 

// We would need an extremely large screen to use data2 values
// as our cx values. In order for our vis to work on (almost) 
// any screen, we need to be able to map (i.e. scale) our data
// values to pixel values. 

// Start with a new frame. This time, we will also set a constant
// for the width and height of our vis
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME3 = d3.select("#vis3")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// Now, let's define our scaling function

// find max X
const MAX_X = d3.max(data2, (d) => { return d; }); 
console.log("Max x: " +MAX_X);  

// Now, define scale functions that maps our data values 
// (domain) to pixel values (range)
const X_SCALE = d3.scaleLinear() // linear scale because we have 
                              // linear data 
                  .domain([0, (MAX_X + 10000)]) // add some padding  
                  .range([0, VIS_WIDTH]); 

console.log("Input: 40000, X_SCALE output: " + X_SCALE(40000));

// Now, we can use X_SCALE to plot our points
FRAME3.selectAll("points")  
    .data(data2)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (X_SCALE(d) + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 

// We can also use X_SCALE to add an axis to the vis  
FRAME3.append("g") // g is a "placeholder" svg
      .attr("transform", "translate(" + MARGINS.left + 
            "," + (VIS_HEIGHT + MARGINS.top) + ")") //moves axis 
                                                    // within margins 
      .call(d3.axisBottom(X_SCALE).ticks(4)) // function for generating axis  
        .attr("font-size", '20px'); // set font size



















function submitClicked() {

	let vals = document.getElementsByTagName("input");

	for (let i = 0; i < vals.length; i++) {

		if(vals[i].checked) {
			let newText = "Selected Vis: " + vals[i].value;
			document.getElementById("selected-vis").innerHTML = newText;
		}
	}
}

document.getElementById("subButton")
		.addEventListener('click', submitClicked);

function toggleLineColor() {
  var element = document.getElementById("line");
  element.classList.toggle("line2");
}





















