'use strict'

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var userActions = require('./petri/actions/userActions.js');
var mongoose = require('mongoose');
var config = require('./config.js');
var locales = require('./locales/locales.js');

// database connection
mongoose.connect(config.database, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log(locales.en.mongooseConnect);
    }
});

// app get express informations
var app = express();

// app method use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/actions', userActions(app, express));

// app method listen
app.listen(config.port, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log(locales.en.listening + config.port);
    }
});