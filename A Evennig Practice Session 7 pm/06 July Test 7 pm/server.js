// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an instance of Express.js
const app = express();

// Configure body-parser middleware to handle JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

// Define the employee schema
const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    designation: String
});

// Create the employee model
const Employee = mongoose.model('Employee', employeeSchema);

// GET /employees: Retrieve a list of all employees
app.get('/employees', (req, res) => {
    Employee.find()
        .then((employees) => {
            res.json(employees);
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while retrieving employees' });
        });
});

// GET /employees/:id: Retrieve an employee by their ID
app.get('/employees/:id', (req, res) => {
    const employeeId = req.params.id;

    Employee.findById(employeeId)
        .then((employee) => {
            if (!employee) {
                res.status(404).json({ error: 'Employee not found' });
            } else {
                res.json(employee);
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while retrieving the employee' });
        });
});

// POST /employees: Add a new employee
app.post('/employees', (req, res) => {
    const { name, age, designation } = req.body;

    const employee = new Employee({
        name,
        age,
        designation
    });

    employee.save()
        .then((newEmployee) => {
            res.json(newEmployee);
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while adding the employee' });
        });
});

// PUT /employees/:id: Update an existing employee by their ID
app.put('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const { name, age, designation } = req.body;

    Employee.findByIdAndUpdate(employeeId, { name, age, designation }, { new: true })
        .then((updatedEmployee) => {
            if (!updatedEmployee) {
                res.status(404).json({ error: 'Employee not found' });
            } else {
                res.json(updatedEmployee);
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while updating the employee' });
        });
});

// DELETE /employees/:id: Delete an employee by their ID
app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;

    Employee.findByIdAndRemove(employeeId)
        .then((deletedEmployee) => {
            if (!deletedEmployee) {
                res.status(404).json({ error: 'Employee not found' });
            } else {
                res.json({ message: 'Employee deleted successfully' });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while deleting the employee' });
        });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
