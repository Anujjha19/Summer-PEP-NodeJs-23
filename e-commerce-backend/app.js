const express = require("express");
const app = express();
const dbConnect = require("./db/dbConnect");

// connecting to the database...
dbConnect();

app.use(express.json());
app.use("/api", require("./routes/routes"));

module.exports = app;
