// models/employeeModel.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    designation: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
