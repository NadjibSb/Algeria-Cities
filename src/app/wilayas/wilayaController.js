const mongoose = require('mongoose');
const Wilaya = require('./wilayaModel');
const fs = require('fs');

const controller = {

    // remove all wilayas & insert them again from wilayas.json
    reset: function () {
        Wilaya.find({}).remove(function (err, res) {
            if (err) throw Error(err);
            console.log('reset successful');
            console.log(res);
        });

        var file = fs.readFile(__dirname+'/wilayas.json', 'utf8', function (err, res) {
            if (err) throw Error(err);
            const data = JSON.parse(res);
            console.log(data.length);
            Wilaya.collection.insertMany(data);
        });

    }
};

module.exports = controller;