'use strict'

var signUp = require('./signUp/signUp.js');
var login = require('./login/login.js');
var seeUsers = require('./seeUsers/seeUsers.js');
var jwt = require('jsonwebtoken');
var secretKey = require('../../config.js').secretKey;

var clientActions = function(app, express){

    var clientActions = express();
    var auth = express();
    
    clientActions.use('/signUp', signUp(app, express));
    clientActions.use('/login', login(app, express));

    clientActions.use('/', function(req, res, next){

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
    });

    clientActions.use('/seeUsers', seeUsers(app, express));

    return clientActions;

};

module.exports = clientActions;