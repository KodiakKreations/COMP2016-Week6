const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Person = require('./person'); //require in person model

const Class = new Schema({
    name: String,
    courseCode: String,
    term: String,
    students: [Person], // Array of References person model
    instructors: [Person] // Array of References person model
});


//Export model of our class schema
module.exports = mongoose.model('Class', Class);