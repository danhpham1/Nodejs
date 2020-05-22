// var todo_model = require('../models/todo');
const mongoose = require('mongoose');
const Todo = require('../models/todomodel')

exports.complete=async (req,res)=>{
    await Todo.findOneAndUpdate({_id:req.params.id},{$set:{done:true}},{new:true});
    res.redirect('/');
}