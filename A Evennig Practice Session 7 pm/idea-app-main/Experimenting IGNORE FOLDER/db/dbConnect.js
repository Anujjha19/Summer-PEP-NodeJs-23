const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;

async function dbConnect() {
  await mongoose.connect(DB_URL, { dbName: "idea-app" });
  console.log(`successfully connected to MongoDB...`);
}

module.exports = dbConnect;
