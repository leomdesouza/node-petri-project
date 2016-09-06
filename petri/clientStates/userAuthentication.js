'use strict'

var User = require('../../app/models/user.js');
var locales = require('../../locales/locales.js');
var jwt = require('jsonwebtoken');
var config = require('../../config.js');

var userAuthentication = function(req, res){

    User.findOne({ username: req.body.username }, 'password', function(err, user){
        if(err){
            res.json({ message: locales.en.mongoFindUserError });
            return;
        }
        if(!user){
            res.json({ message: userDoesentExist });
            return;
        }
        else if(user){
            var passwordValidation = user.comparePassword(req.body.password);
            if(!passwordValidation){
                res.json({ message: locales.en.invalidPassword });
            }
            else{
                var token = tokenCreation(user);
                res.json({ message: locales.en.loginSucess ,token: token });
                return;
            }
        }
    });
}

function tokenCreation(user){
    var token = jwt.sign({
        _id: user.id,
        name: user.name,
        username: user.username
    }, config.secretKey, {
        expiresIn: '24h'
    });
    return token;
}

module.exports = userAuthentication;