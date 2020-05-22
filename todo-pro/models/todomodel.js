const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    name:String,
    done:Boolean
})

module.exports = mongoose.model("todo",todoSchema);