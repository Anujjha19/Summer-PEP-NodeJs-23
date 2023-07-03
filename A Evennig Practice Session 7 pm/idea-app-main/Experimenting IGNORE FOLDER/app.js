const express = require("express");
const app = express();
const routes = require("./routes/myRouter");
const dbConnect = require("./db/dbConnect");

dbConnect();
app.use(express.json());
app.use(routes);

module.exports = app;
