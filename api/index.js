
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connect to mongodb
// mongoose.connect('mongodb://localhost/ourdata');
// mongoose.Promise = global.Promise;

// app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes'));

// error handling middleware
app.use(function(err,req,res,next){
    console.log(err);
    res.sendStatus(500);
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log(`Running on Port ${process.env.port || 4000}`);
});