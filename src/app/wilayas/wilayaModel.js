const mongoose = require("mongoose");

const wilayaSchema = mongoose.Schema({
    id: Number,
    code: Number,
    name: String,
    name_ar: String,
    longitude: Number,
    latitude: Number
});


module.exports = mongoose.model('wilaya',wilayaSchema);