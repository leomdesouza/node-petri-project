'use strict';

var Device = require('../../../app/models/device.js');
var locales = require('../../../locales/locales.js');


var checkDevice = function(req, res, next){

    var devices = Device;

    devices.findOne({ deviceCode: req.body.deviceCode }, function(err, device){
        if(err){
            console.log(err);
        } else if(device){
            next();
            } else{
                res.status(401).json({
                    message: locales.en.deviceCodeUnauthorized
                });
            }
    });
};

module.exports = checkDevice;