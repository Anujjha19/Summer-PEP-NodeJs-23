const Users = require("../models/userModel");

const createUser = (req, res) => {
  if (!req.body.email || !req.body.name || !req.body.password) {
    return res.status(400).send({ status: "error", message: "bad request" });
  }

  try {
    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      ideas: [],
    });

    user
      .save()
      .then((user_) => {
        res
          .status(201)
          .send({
            status: "ok",
            message: "user created successfully",
            user: user_,
          });
      })
      .catch((err) => {
        res
          .status(400)
          .send({ status: "error", message: "user already exists", err: err });
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Internal server error..." });
  }
};

module.exports = {
  createUser,
};
