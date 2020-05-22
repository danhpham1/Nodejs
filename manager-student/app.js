const express = require('express');
const bodyParser = require('body-parser');
const routeHome = require('./routers/home');

const app = express();
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use('/',routeHome);

app.listen(3000,()=>{
    console.log('server started!');
})