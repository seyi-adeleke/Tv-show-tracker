const mongoose = require('mongoose');

let seriesSchema = mongoose.Schema({
    user:String,
    name:String,
    description:String,
    premierDate:String,
    status:String

});

module.exports = mongoose.model( 'series', seriesSchema );
