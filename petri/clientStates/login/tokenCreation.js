'use strict';

var User = require('../../../app/models/user.js');
var locales = require('../../../locales/locales.js');
var jwt = require('jsonwebtoken');
var config = require('../../../config.js');

var tokenCreation = function(req, res){

    var users = User;

    users.findOne({ username: req.body.username }, function(err, user){
        if(err){
            console.log(err);
        }
        else{
            var token = jwt.sign({
                id: user.id,
                name: user.name,
                username: user.username
            }, config.secretKey, {
                expiresIn: '24h'
            });
            res.status(202).json({ 
                message: locales.en.loginSucess,
                token: token
            });
        }
    });
};

module.exports = tokenCreation;