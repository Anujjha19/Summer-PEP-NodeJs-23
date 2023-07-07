require("dotenv").config();
const mongoose = require("mongoose");

async function dbConnect() {
  await mongoose.connect(process.env.DB_URL, { dbName: "flip-zon" });
  console.log("successfully connected to MongoDB.");
}

module.exports = dbConnect;
