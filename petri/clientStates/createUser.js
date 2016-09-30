'use strict';

var User = require('../../app/models/user.js');
var locales = require('../../locales/locales.js');

var createUser = function(req, res){

    var user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err){
        if(err){
            res.status(500).json({
                message: locales.en.userNotCreated 
            });
            return;
        }
        else{
            res.status(201).json({ 
                message: locales.en.userCreated 
            });
            return;
        }
    });  
};


module.exports = createUser;