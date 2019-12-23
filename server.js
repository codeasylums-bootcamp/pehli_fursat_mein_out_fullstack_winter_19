const express = require('express');
const mongoose = require('mongoose');
// const constants = require('./constants.js');
// const middlewares = require('./middlewares');
// const AuthController = require('./controllers/AuthController');
// const UserController = require('./controllers/UserController');
const bodyParser = require('body-parser');
const VisitorModel = require('./models/Visitor');

const urlencodedParser = bodyParser.urlencoded({ extended:false });

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/gateway', {
useNewUrlParser : true,
    useUnifiedTopology : true
});

// app.post('/register', AuthController.register);
// app.post('/login', AuthController.login);
// app.get('/users/:id', middlewares.checkAuth, UserController.getUser);

app.get('/', (req,res)=>{
    res.sendFile('visitor.html',{ root: __dirname });
});

app.post('/', urlencodedParser, (req,res)=>{
    console.log(req.body);
    res.sendFile('otp.html',{ root: __dirname });
    const number = req.body.number;
    console.log(number);
});

app.listen(3000, ()=>{
    console.log(`server is listening on 3000`);
});