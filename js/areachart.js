
function areachart(id){

var margin = {top: 10, right: 10, bottom: 20, left: 40},
    width = 400- margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

var format = d3.time.format("%m/%d/%Y");

var x = d3.time.scale()
    .range([0, width]);
var y = d3.scale.linear()
    .range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

//     var tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .offset([-30, 0])
//   .html(function(d) {
//     if(id=="#land" )
//     {
//     return "<span style='color:grey'>" + d.Land_Area + "</span>";
//     }
//    else if(id=="#water" ){
//        return "<span style='color:grey'>" + d.Water_Area + "</span>";
//    }
//     else if(id=="#population" ){
//        return "<span style='color:grey'>" + d.population + "</span>";
//    }
//   })

    
    if(id=="#land")
        {
var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.Land_Area); });

        }

    else if(id=="#water")
        {
var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.Water_Area); });

        }
 else if(id=="#population")
        {
var area = d3.svg.area()
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.population); });

        }

var svg = d3.select(id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


if(id=="#land" || id=="#water")
    {
var plotdata = "https://bdevgon.github.io/dv.github.io/data/landarea.tsv";
    }
    else if(id=="#population")
        {
var plotdata = "https://bdevgon.github.io/dv.github.io/data/no-population.tsv";
        }

d3.tsv(plotdata, type, function(error, data) {
  if (error) throw error;


  x.domain(d3.extent(data, function(d) { return d.date; }));
  if(id=="#land")
    {
        y.domain([153,d3.max(data, function(d) { return d.Land_Area; })]); 
    }
   else if(id=="#water")
    {
        y.domain([171,d3.max(data, function(d) { return d.Water_Area; })]); 
    }
    else if(id=="#population")
    {
        y.domain([190000,d3.max(data, function(d) { return d.population; })]); 
    }
 
  
if(id=="#land")
    {
     svg.append("path")
      .datum(data)
      .attr("class", "land")
      .attr("d", area)
        .on("mouseover", function() {
          tooltip.style("display", null);
        })
        .on("mouseout", function() {
          tooltip.style("display", "none");
        })
        .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0] - 15;
          var yPosition = d3.mouse(this)[1] - 25;
          tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
          var x0 = x.invert(d3.mouse(this)[0]);  
          var y0 = y.invert(d3.mouse(this)[1]); 
          tooltip.select("text").text(d3.time.format('%Y/%m/%d')(x0)+ " " +Math.round(y0));
        });
    }
    else if(id=="#water")
    {
     svg.append("path")
      .datum(data)
      .attr("class", "water")
      .attr("d", area)
        .on("mouseover", function() {
          tooltip.style("display", null);
        })
        .on("mouseout", function() {
          tooltip.style("display", "none");
        })
        .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0] - 15;
          var yPosition = d3.mouse(this)[1] - 25;
          tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
          var x0 = x.invert(d3.mouse(this)[0]);  
          var y0 = y.invert(d3.mouse(this)[1]); 
          tooltip.select("text").text(d3.time.format('%Y/%m/%d')(x0)+ " " +Math.round(y0));
        });
    }
       else if(id=="#population")
    {
     svg.append("path")
      .datum(data)
      .attr("class", "population")
      .attr("d", area)
        .on("mouseover", function() {
          tooltip.style("display", null);
        })
        .on("mouseout", function() {
          tooltip.style("display", "none");
        })
        .on("mousemove", function(d) {
          var xPosition = d3.mouse(this)[0] - 15;
          var yPosition = d3.mouse(this)[1] - 25;
          tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
          var x0 = x.invert(d3.mouse(this)[0]);  
          var y0 = y.invert(d3.mouse(this)[1]); 
          tooltip.select("text").text(d3.time.format('%Y/%m/%d')(x0)+ " " +Math.round(y0));
        });
    }

  svg.append("g")
      .attr("class", "x axis")//.attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  
    if(id=="#land" || id=="#water")
    {
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("square mile");
    } 
  
    else if(id=="#population"){
      svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "1em")
      .style("text-anchor", "end")
      .text("Number of people");
    }
// svg.selectAll('g.generator').
// data(data)
// .enter().append("svg:text")
// .attr("y", function(d){ 
//     if(id=="#land")
//         {return y(d.Land_Area);}
//     else if(id=="#water"){return y(d.Water_Area);}
//     else if(id=="#population"){return y(d.population);}

// });
    
    var tooltip = svg.append("g")
        .attr("class", "tooltip")
        .style("opacity", 1.0)
        .style("display", "none");

      tooltip.append("rect")
        .attr("width", 120)
        .attr("height", 20)
        .attr("fill", "white")
        .style("opacity", 1.0);

      tooltip.append("text")
        .attr("x", 60)
        .attr("dy", "1.2em")
        .style("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold");
  
});




function type(d) {
  d.date = format.parse(d.date);
 if(id=="#land")
    {
    d.Land_Area = +d.Land_Area;
    }
  else if(id=="#water")
    {
    d.Water_Area = +d.Water_Area;
    }
 else if(id=="#population")
    {
    d.population = +d.population;
    }
  return d;
}
}
areachart('#population');
areachart('#land');
areachart('#water');
