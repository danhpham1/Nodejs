const express = require('express');
const fs = require('fs');
const multer = require('multer');

const app = express();



app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static('public'));

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname  + '/public/img');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+ '-' + file.originalname);
    }
}) 

var upload = multer({storage:storage});

app.get('/',(req,res)=>{
   res.render('index');
})

app.get('/browser',(req,res)=>{
    const images = fs.readdirSync('./public/img');
    // console.log(images);
    res.render('uploadimg',{image:images});
})


app.post('/upload',upload.single('uploadfile'),(req,res)=>{
    // console.log(req.file);
    res.redirect('/browser');
})

app.get('/delete',(req,res)=>{
    // console.log(req.query.filename);
    // console.log(fs.existsSync(`./public/img/${req.query.filename}`));
    if(fs.existsSync(`./public/img/${req.query.filename}`)){
        fs.unlinkSync(`./public/img/${req.query.filename}`);
    };
    res.redirect('/browser');

})

app.listen(3000,()=>console.log('Server started'));