'use strict';

var checkDevice = require('../../clientStates/configDevice/checkDevice.js');
var tokenCreation = require('../../clientStates/configDevice/tokenCreation.js');

var configDevice = function(app, express){

    configDevice = express();

    configDevice.use('/', function(req, res, next){
        checkDevice(req, res, next);
    });

    configDevice.post('/', function(req, res){
        tokenCreation(req, res);
    });

    return configDevice;

};

module.exports = configDevice;