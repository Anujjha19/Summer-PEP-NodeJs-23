## Node.js RESTful API with MongoDB and Express

This is a RESTful API built with Node.js, MongoDB, and Express. It provides endpoints to perform CRUD operations on a collection of students.

## Prerequisites

- Node.js (version X.X.X or higher)
- MongoDB (version X.X.X or higher)

## Getting Started

1. Clone the repository:
git clone https://github.com/Anujjha19/Summer-PEP-NodeJs-23/tree/main/Assignment%2022%20June

2. Install the dependencies:
    - nodemon
    - express
    - mongosh
    - dotenv
cd your-repo
npm install


3. Configure the database connection:

- Open the `db.js` file in the root directory.
- Update the `uri` variable with your MongoDB connection string.

4. Start the server:

- node index.js
OR
- nodemon index.js

The API server will be running at http://localhost:3000.

## API Endpoints

### GET /students

This endpoint retrieves all students from the database and returns a JSON response with an array of all the students.
### GET /students/:id

This endpoint fetches a specific student by their ID from the database and returns a JSON response with the student's details.
### POST /students

To create a new student in the database, use this endpoint. It accepts JSON data in the request body with the student's details, validates the data, and inserts the student into the "students" collection. The endpoint then returns a JSON response with the newly created student's details.
### PUT /students/:id

Use this endpoint to update an existing student in the database. It accepts JSON data in the request body with the updated student's details, finds the student by their ID, and updates their information in the "students" collection. The endpoint then returns a JSON response with the updated student's details.
### DELETE /students/:id

This endpoint deletes a specific student by their ID from the database. It removes the student from the "students" collection and returns a JSON response indicating the success or failure of the deletion.


To interact with these API endpoints, you can use tools like Postman or ThunderClient. Set the request method, URL, and body (if required) according to the endpoint you want to test.

Feel free to modify and use this README file for your project.
