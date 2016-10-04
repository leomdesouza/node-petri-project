'use strict';

var Device = require('../../../app/models/device.js');
var locales = require('../../../locales/locales.js');
var jwt = require('jsonwebtoken');
var config = require('../../../config.js');

var tokenCreation = function(req, res){

    var devices = Device;

    devices.findOne({ deviceCode: req.body.deviceCode }, function(err, device){
        if(err){
            console.log(err);
        }
        else{
            var token = jwt.sign({
                id: device.id,
                deviceName: device.deviceName,
                deviceCode: device.deviceCode,
                deviceVersion: device.deviceVersion,
                deviceType: device.deviceType
            }, config.secretKey, {
                expiresIn: '24h'
            });
            res.status(202).json({ 
                message: locales.en.deviceTokenSucess,
                token: token
            });
        }
    });
};

module.exports = tokenCreation;