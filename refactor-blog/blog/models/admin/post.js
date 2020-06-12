const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title:String,
    logo:String,
    idTitle:mongoose.Schema.Types.ObjectId,
    views:Number,
    nameTitle:String,
    contentSub:String,
    content:String,
    date:String
})

module.exports = mongoose.model('post',postSchema);