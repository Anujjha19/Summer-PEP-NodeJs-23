// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// GET /employees
router.get('/', employeeController.getAllEmployees);

// GET /employees/:id
router.get('/:id', employeeController.getEmployeeById);

// POST /employees
router.post('/', employeeController.addNewEmployee);

// PUT /employees/:id
router.put('/:id', employeeController.updateEmployeeById);

// DELETE /employees/:id
router.delete('/:id', employeeController.deleteEmployeeById);

module.exports = router;
