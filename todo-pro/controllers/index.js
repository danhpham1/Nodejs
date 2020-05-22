// var todo_model = require('../models/todo');
const mongoose = require('mongoose');
const Todo = require('../models/todomodel');


// let findTodo = async ()=>{
//     const todoList = await Todo.find();

//     return todoList;
// }

exports.index = async (req,res)=>{
    // res.send('<h1>Helle Clients</h1>');
    // Todo.find(function(err,data){
    //     if(err){
    //         res.json({message:'faild'});
    //     }else{
    //         res.json(data);
    //     }
    // })
    const todoList = await Todo.find();
    // console.log(todoList);
    // res.json(todoList);
    res.render('index',{todoList:todoList});
};

