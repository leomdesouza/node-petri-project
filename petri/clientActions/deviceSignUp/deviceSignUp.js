'use strict';

var tokenAuthentication = require('../../clientStates/tokenAuthentication/tokenAuthentication.js');
var checkDeviceSignUp = require('../../clientStates/deviceSignUp/checkDeviceSignUp.js');
var createDevice = require('../../clientStates/deviceSignUp/createDevice.js');

var deviceSignUp = function(app, express){

    var deviceSignUp = express();

    deviceSignUp.use('/', function(req, res, next){
        tokenAuthentication(req, res, next);
    });

    deviceSignUp.use('/', function(req, res, next){
        checkDeviceSignUp(req, res, next);
    });

    deviceSignUp.post('/', function(req, res){
        createDevice(req, res);
    });

   return deviceSignUp; 

};

module.exports = deviceSignUp;