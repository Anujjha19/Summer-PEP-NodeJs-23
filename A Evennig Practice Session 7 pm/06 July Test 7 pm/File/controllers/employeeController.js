// controllers/employeeController.js
const Employee = require('../models/employeeModel');

// GET /employees
exports.getAllEmployees = (req, res) => {
    Employee.find()
        .then((employees) => {
            res.json(employees);
        })
        .catch((error) => {
            res.status(500).json({ error: 'An error occurred while retrieving employees' });
        });
};

// GET /employees/:id
exports.getEmployeeById = (req, res) => {
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
};

// POST /employees
exports.addNewEmployee = (req, res) => {
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
};

// PUT /employees/:id
exports.updateEmployeeById = (req, res) => {
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
};

// DELETE /employees/:id
exports.deleteEmployeeById = (req, res) => {
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
};
