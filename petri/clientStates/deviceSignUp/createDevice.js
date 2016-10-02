'use strict';

var Device = require('../../../app/models/device.js');
var locales = require('../../../locales/locales.js');

var createDevice = function(req, res){

    var device = new Device({
        deviceOwner: req.decoded.id,
        deviceName: req.body.deviceName,
        deviceCode: req.body.deviceCode,
        deviceVersion: req.body.deviceVersion,
        deviceType: req.body.deviceType
    });

    device.save(function(err){
        if(err){
            res.status(500).json({
                message: locales.en.deviceNotCreated 
            });
        }
        else{
            res.status(201).json({ 
                message: locales.en.deviceCreated 
            });
        }
    });
};

module.exports = createDevice;
