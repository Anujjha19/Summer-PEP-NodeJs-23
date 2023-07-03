const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/controllers");

router.get("/create-user", createUser);

module.exports = router;
