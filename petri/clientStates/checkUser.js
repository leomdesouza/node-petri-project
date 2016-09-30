'use strict';

var User = require('../../app/models/user.js');
var locales = require('../../locales/locales.js');


var checkUser = function(req, res, next){

    var users = User;

    users.findOne({ username: req.body.username }, function(err, user){
        if(err){
            console.log(err);
        } else if(!user){
            next();
            } else{
                res.status(401).json({
                    message: locales.en.usernameUnauthorized
                });
            }
    });
};

module.exports = checkUser;