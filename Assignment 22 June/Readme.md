## File Descriptions

### index.js:

This file serves as the main entry point for your server application. It imports the `app` module and the `connectToDB` function from separate files and starts the server to listen for incoming requests on a specified port.

### student.js:

This file defines the mongoose schema for the `Student` model. It specifies the required fields such as `name`, `age`, and `grade`.

### app.js:

This file contains the core functionality of your API. It utilizes the Express framework to handle incoming HTTP requests, define API routes, and interact with the `Student` model. The routes include fetching all students, fetching a specific student by ID, creating a new student, updating an existing student, and deleting a student.

### db.js:

This file establishes a connection to the MongoDB database using the `mongoose` library. It reads the connection details from a `.env` file and exports a function `connectToDB` that can be called to connect to the database.

### README.md:

This document provides an overview of the files in the project and their respective purposes.

