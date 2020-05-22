const express = require('express');
const bodyParser = require('body-parser');
const home = require('./routers/home');
const mongoose = require('mongoose');

// const Todo = require('./models/todomodel');

const app = express();

//conect mongodb

mongoose.connect('mongodb+srv://danh:hanhphucao@cluster0-l5pcw.mongodb.net/tododb?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},function(err){
    if(err){
        console.log('connect fail');
    }else{
        console.log('connect successful');
    }
});

app.set('view engine','ejs')
app.set('views',__dirname+'/views');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:false}));

// app.get('/:name',(req,res)=>{
//     var todo = new Todo({
//         name:req.params.name,
//         done:false
//     })
//     res.json(todo);
// })


app.use('/',home);

app.listen(3000,()=>{
    console.log('Server starting!!!');
})