const mongoose = require('mongoose');

var titleSchema = new mongoose.Schema({
    name:String
})

module.exports = mongoose.model('title',titleSchema);