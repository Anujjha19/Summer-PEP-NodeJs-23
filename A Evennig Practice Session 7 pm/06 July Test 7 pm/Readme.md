# Employee Management Web Application

This is a web application built with Node.js, Express.js, and MongoDB that allows you to manage employee data. The application provides functionalities to retrieve, add, update, and delete employees from a MongoDB database.

## Features

- Retrieve a list of all employees
- Retrieve an employee by their ID
- Add a new employee
- Update an existing employee by their ID
- Delete an employee by their ID

## Prerequisites

Make sure you have the following software installed on your system:

- Node.js: [Download](https://nodejs.org)
- MongoDB: [Download](https://www.mongodb.com/try/download/community)

## To Use

1. Clone the repository
2. Install Dependencies and packages : 
    -[ npm install express body-parser mongoose mongod ]
3. Start Server : Server will start running on http://localhost:3000.

## API Endpoints

- `GET /employees`: Retrieve a list of all employees.
- `GET /employees/:id`: Retrieve an employee by their ID.
- `POST /employees`: Add a new employee.
- `PUT /employees/:id`: Update an existing employee by their ID.
- `DELETE /employees/:id`: Delete an employee by their ID.

## Usage

You can use tools like Thunder Client, Postman, or cURL to interact with the API endpoints and perform the following operations:

- Retrieve all employees: Send a GET request to `http://localhost:3000/employees`.
- Retrieve an employee by ID: Send a GET request to `http://localhost:3000/employees/:id` (replace `:id` with the actual employee ID).
- Add a new employee: Send a POST request to `http://localhost:3000/employees` with the employee details in the request body.
- Update an existing employee: Send a PUT request to `http://localhost:3000/employees/:id` with the updated employee details in the request body (replace `:id` with the actual employee ID).
- Delete an employee: Send a DELETE request to `http://localhost:3000/employees/:id` (replace `:id` with the actual employee ID).

## Error Handling

- If an error occurs while retrieving employees, the server will respond with a status code 500 and an error message.
- If an employee is not found, the server will respond with a status code 404 and an error message.
