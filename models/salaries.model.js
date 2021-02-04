module.exports = function(){
    var db = require('../db/mongo-conn')();
    var Schema = require('mongoose').Schema;

    var salaries = Schema({
        nom: String,
        prenom: String,
        adresse: String,
        status: Boolean
    });

    return db.model('salaries', salaries);

}