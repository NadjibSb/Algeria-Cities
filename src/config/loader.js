const express = require('express');
const bodyParser = require('body-parser');

module.exports = function(app){

    app.use(express.static(__dirname + '/../public'));
    app.use(bodyParser.urlencoded({ extended: false }));
}