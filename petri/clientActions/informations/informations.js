'use strict';

var deviceTokenAuthentication = require('../../clientStates/tokenAuthentication/deviceTokenAuthentication.js');
var receiveData = require('../../clientStates/informations/receiveData.js');

var informations = function(app, express){

    var informations = express();

    informations.use('/', function(req, res, next){
        deviceTokenAuthentication(req, res, next);
    });

    informations.post('/', function(req, res){
        receiveData(req, res);
    });

    return informations;
};

module.exports = informations;