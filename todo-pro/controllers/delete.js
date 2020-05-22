// var todo_model = require('../models/todo');
const mongoose = require('mongoose');
const Todo = require('../models/todomodel');

exports.delete = async (req,res)=>{
    // console.log(req.params.id);
    // todo_model.todoList.splice(req.params.id,1);
    await Todo.deleteOne({_id:req.params.id});
    res.redirect('/');
}