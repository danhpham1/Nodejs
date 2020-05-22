// var todo_model = require('../models/todo');
const mongoose = require('mongoose');
const Todo = require('../models/todomodel');

exports.create=(req,res)=>{
    // console.log(req.body);
    // todo_model.todoList.push({id:todo_model.id,name:req.body.todo,done:false});
    // todo_model.id++;
    // console.log(todoList);
    // res.redirect('/');
    var todo = new Todo({
        name:req.body.todo,
        done:false
    })
    // res.json(todo);
    todo.save(function(err){
        if(err){
            res.json({message:'fail'});
        }else{
            console.log('saved');
            res.redirect('/');
        }
    })
}