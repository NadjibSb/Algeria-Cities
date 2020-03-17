var express = require('express');

var app = express();

app.get("/", function(req,res){
    res.json("test");
});

app.listen(3300);