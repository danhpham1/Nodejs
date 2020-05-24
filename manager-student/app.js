const express = require('express');
const bodyParser = require('body-parser');
const routeHome = require('./routers/home');
const loginRouter = require('./routers/login');
const passport = require('passport');
const session = require('express-session');

//middleware
const middleware = require('./middleware/checkout');


const app = express();
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(session({
    secret:'manager',
    resave:true,
    saveUninitialized:false,
    cookie:{maxAge:3000000}
}))

app.use(passport.initialize());

app.use(passport.session());



app.use('/login',loginRouter);
app.use('/',middleware.ensureAuthenticated,routeHome);


app.listen(3000,()=>{
    console.log('server started!');
})