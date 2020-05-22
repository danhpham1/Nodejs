const express = require('express');
const routers = require('./routers/router');

const app = express();

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('server started');
})

app.use('/',routers);




