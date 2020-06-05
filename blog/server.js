const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//require
const routerIndex = require('./routers/admin/routerIndex');

const routerUpload = require('./routers/ckeditor/upload');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/blog',{
    useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false
},function(err){
    if(err){
        console.log('connect to mongo faild');
    }else{
        console.log('connect to mongo success')
    }
});

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));



app.use('/admin',routerIndex);
//upload img to server user ckeditor
app.use('/ckeditor',routerUpload);

app.listen(3000,()=>console.log('server start'));