'use strict';

var User = require('../../../app/models/user.js');
var locales = require('../../../locales/locales.js');

var passwordValidation = function(req, res, next){

    var users = User;

    users.findOne({ username: req.body.username }, 'password', function(err, user){

        if(err){
            console.log(err);
        } else{
            var validation = user.comparePassword(req.body.password);
            
            if(!validation){
                res.status(401).json({
                    message: locales.en.invalidPassword 
                });
            } else{
                next();
            }
        }

    });

};

module.exports = passwordValidation;