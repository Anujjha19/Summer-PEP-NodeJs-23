const Users = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllUsers = (req, res) => {
  try {
    Users.find()
      .then((users) => {
        return res
          .status(200)
          .send({ status: "ok", message: "success", users: users });
      })
      .catch((err) => {
        return res.status(500).send({
          status: "error",
          message: "unknown error while getting users",
        });
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Internal server error" });
  }
};

const createUser = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({ status: "error", message: "bad request" });
  }

  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });

      user
        .save()
        .then((user_) => {
          return res.status(201).send({
            status: "ok",
            message: "successfully created a new user",
            details: user_,
          });
        })
        .catch((error) => {
          return res.status(400).send({
            status: "error",
            message: "User with email already exists",
            err: error,
          });
        });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ status: "err", message: "error while hashing password" });
    });
};

const getUserByEmail = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      status: "error",
      message: "please provide email and password to get user details",
    });
  }
  try {
    Users.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ status: "error", message: "user not found" });
      }

      bcrypt.compare(req.body.password, user.password).then((flag) => {
        if (!flag) {
          return res
            .status(404)
            .send({ status: "error", message: "passwords do not match" });
        }
        return res.send({ status: "ok", message: "logged in", user: user });
      });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "err", message: "error while hashing password" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
};
