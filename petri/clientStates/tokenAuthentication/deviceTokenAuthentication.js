'use strict';

var jwt = require('jsonwebtoken');
var secretKey = require('../../../config.js').secretKey;
var locales = require('../../../locales/locales.js');

var deviceTokenAuthentication = function(req, res, next){

        var token = req.headers['token'];

        if(token){
            jwt.verify(token, secretKey, function(err, decoded){
                if(err){
                    res.status(401).json({
                        message: locales.en.deviceTokenNotAuthorized 
                    });
                }
                else{
                    req.decoded = decoded;
                    next();
                }
            });
        }
        else{
            res.status(401).json({
                message: locales.en.deviceTokenNotProvided 
            });
        }
    };

module.exports = deviceTokenAuthentication;