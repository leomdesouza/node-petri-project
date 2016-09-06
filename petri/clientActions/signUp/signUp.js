'use strict'

var createUser = require('../../clientStates/createUser.js');

var signUp = function(app, express){
    
    var signUp = express.Router();

    signUp.post('/', function(req, res){
        
        createUser(req, res);

    });

    return signUp;

};

module.exports = signUp;