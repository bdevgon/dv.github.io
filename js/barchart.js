
function barchart(id,label){
  
if(id=="cultaraljobs")
    {
        jobs(id,label);
    }
else if (id=="income")
    {
        income(id,label);
    }
else if (id=="tourists")
    {
        tourists(id,label);
    }
    else if (id=="parks")
    {
        parks(id,label);
    }

}

barchart('cultaraljobs','job percent');



//****************************************  jobs bar    *********************** */


function jobs(id,label)
{

    var margin = {top: 40, right: 10, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


var label=label;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .6);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

   
    //.tickFormat(formatPercent);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>"+label+"</strong> " + d.frequency + "</span>";
  })


var svg= d3.select("#"+id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);

    d3.tsv("data/data.tsv", type, function(error, data) {
  
  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([4.5, d3.max(data, function(d) { return d.frequency; })]);
  
       svg.append("g")
      .attr("class", "x axis axis_size ")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

 svg.append("g")
      .attr("class", "y axis axis_size ")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".5em")
      .style("text-anchor", "end")
    .text(label);

  var bars=svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", 0);
      
      bars.transition().duration(1500)
      .attr("y", function(d) { return y(d.frequency); })
       .attr("height", function(d) { return height - y(d.frequency); });
      
      bars.on('mouseover', tip.show)
      .on('mouseout', tip.hide);


});
    function type(d) {
  d.frequency = +d.frequency;
  return d;
}
}


///*************************************  income bar ************************************ */

function income(id,label)
{var margin = {top: 40, right: 10, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var label=label;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .6);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>"+label+"</strong> " + d.income + "</span>";
  })


var svg= d3.select("#"+id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);


    d3.tsv("data/income.tsv", type, function(error, data) {
  
  x.domain(data.map(function(d) { return d.year; }));
  y.domain([30000,d3.max(data, function(d) { return d.income; })]);
  
       svg.append("g")
      .attr("class", "x axis axis_size ")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

 svg.append("g")
      .attr("class", "y axis axis_size ")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".5em")
      .style("text-anchor", "end")
    .text(label);

  var bars=svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "incomebar")
      .attr("x", function(d) { return x(d.year); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.income); })
      .attr("height", 0);
      
      bars.transition().duration(1500)
      .attr("y", function(d) { return y(d.income); })
       .attr("height", function(d) { return height - y(d.income); });
      
      bars.on('mouseover', tip.show)
      .on('mouseout', tip.hide);


});
    function type(d) {
  d.income = +d.income;
  return d;
}
}

//************************************   tourists Bar ****************/

function tourists(id,label)
{
    var margin = {top: 40, right: 10, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var label=label;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .6);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>"+label+"</strong> " + d.tourists + "</span>";
  })


var svg= d3.select("#"+id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);


    d3.tsv("data/tourists.tsv", type, function(error, data) {
  
  x.domain(data.map(function(d) { return d.year; }));
  y.domain([1.5,d3.max(data, function(d) { return d.tourists; })]);
  
       svg.append("g")
      .attr("class", "x axis axis_size ")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

 svg.append("g")
      .attr("class", "y axis axis_size ")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".5em")
      .style("text-anchor", "end")
    .text(label);

  var bars=svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "touristbar")
      .attr("x", function(d) { return x(d.year); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.tourists); })
      .attr("height", 0);
      
      bars.transition().duration(1500)
      .attr("y", function(d) { return y(d.tourists); })
       .attr("height", function(d) { return height - y(d.tourists); });
      
      bars.on('mouseover', tip.show)
      .on('mouseout', tip.hide);


});
    function type(d) {
  d.tourists = +d.tourists;
  return d;
}
}

//***************************************** parks      ************* */


function parks(id,label)
{
    var margin = {top: 40, right: 10, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var label=label;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .6);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>"+label+"</strong> " + d.ratings + "</span>";
  })


var svg= d3.select("#"+id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);


    d3.tsv("data/parks.tsv", type, function(error, data) {
  
  x.domain(data.map(function(d) { return d.year; }));
  y.domain([50,d3.max(data, function(d) { return d.ratings; })]);
  
       svg.append("g")
      .attr("class", "x axis axis_size ")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

 svg.append("g")
      .attr("class", "y axis axis_size ")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".5em")
      .style("text-anchor", "end")
    .text(label);

  var bars=svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "parkbar")
      .attr("x", function(d) { return x(d.year); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.ratings); })
      .attr("height", 0);
      
      bars.transition().duration(1500)
      .attr("y", function(d) { return y(d.ratings); })
       .attr("height", function(d) { return height - y(d.ratings); });
      
      bars.on('mouseover', tip.show)
      .on('mouseout', tip.hide);


});
    function type(d) {
  d.ratings = +d.ratings;
  return d;
}
}
