const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Program = require('./program'); //require in program model

const Person = new Schema({
    firstName: String,
    lastName: String,
    studentNumber: Number,
    program: Program //References program model
});


//Export model of our person schema
module.exports = mongoose.model('Person', Person);