var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name: "Salmon Creek", image: "https://farm1.staticflickr.com/112/316612921_f23683ca9d.jpg"},
    {name: "Granite Hill", image: "https://farm2.staticflickr.com/1071/882242386_ddcd5e0563.jpg"},
    {name: "Mountain Goat's", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"}
  ]

  res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(3000, function(){
  console.log("The YelpCamp Server Has Started");
});
