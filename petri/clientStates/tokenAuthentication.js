'use strict';

var jwt = require('jsonwebtoken');
var secretKey = require('../../config.js').secretKey;
var locales = require('../../locales/locales.js');

var tokenAuthentication = function(req, res, next){

        var token = req.headers['token'];

        if(token){
            jwt.verify(token, secretKey, function(err, decoded){
                if(err){
                    res.status(401).json({
                        message: locales.en.invalidToken 
                    });
                }
                else{
                    next();
                }
            });
        }
        else{
            res.status(401).json({
                message: locales.en.tokenNotAuthorized 
            });
        }
    };

module.exports = tokenAuthentication;