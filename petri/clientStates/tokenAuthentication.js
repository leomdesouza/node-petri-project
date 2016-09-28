'use strict';

var jwt = require('jsonwebtoken');
var secretKey = require('../../config.js').secretKey;

var tokenAuthentication = function(req, res, next){

        var token = req.headers['token'];

        if(token){
            jwt.verify(token, secretKey, function(err, decoded){
                if(err){
                    res.json({ message: 'Invalid!' })
                }
                else{
                    next();
                }
            });
        }
        else{
            res.json({ message: 'Unauthorized!' });
        }
    };

module.exports = tokenAuthentication;