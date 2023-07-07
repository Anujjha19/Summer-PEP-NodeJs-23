const ProductModel = require("../models/productModel");

const getProductByName = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      status: "error",
      message: "please provide name of the product to retrieve",
    });
  }

  try {
    ProductModel.findOne({ name: req.body.name })
      .then((prod) => {
        if (!prod) {
          return res.status(404).send({
            status: "not found",
            message: "no product found with that name.",
          });
        }
        return res.status(200).send({ status: "ok", details: prod });
      })
      .catch((err) => {
        return res.status(500).send({
          status: "error",
          message: "error finding the product",
          error: err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "internal server error.",
      error: error,
    });
  }
};

const createNewProduct = (req, res) => {
  if (
    !req.body.name ||
    !req.body.price ||
    !req.body.quantity ||
    !req.body.description
  ) {
    return res.status(400).send({ status: "error", message: "bad request" });
  }

  try {
    const product = new ProductModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    });

    product
      .save()
      .then((prod) => {
        return res.status(201).send({
          status: "ok",
          message: "successfully created a new product",
          details: prod,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          status: "error",
          message: "product already exists in the database..",
          error: error,
        });
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "cannot create product" });
  }
};

const getAllProducts = (req, res) => {
  try {
    ProductModel.find()
      .then((products) => {
        return res.status(200).send({ status: "ok", products: products });
      })
      .catch((err) => {
        return res.send({ status: "error" });
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "internal server error" });
  }
};

const deleteProductByName = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      status: "error",
      message: "please provide name of the product to delete",
    });
  }
  try {
    ProductModel.deleteOne({ name: req.body.name })
      .then((msg) => {
        if (msg.deletedCount === 0) {
          return res.status(404).send({
            status: "error",
            message: "no product found with that name.",
          });
        }
        return res.status(200).send({
          status: "ok",
          message: `successfully deleted the product ${req.body.name}`,
          msg: msg,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          status: "error",
          message: "unknown error",
          error: err,
        });
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "internal server error" });
  }
};

const updateProductDetails = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ status: "error", message: "bad request" });
  }
  try {
    productModel
      .updateOne({ _id: req.body.name }, req.body)
      .then((prod) => {
        return res.status(200).send({
          status: "ok",
          message: "successfully updated",
          details: prod,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          status: "error",
          message: "error updating details",
          error: err,
        });
      });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "err", message: "internal server error" });
  }
};

module.exports = {
  getProductByName,
  createNewProduct,
  getAllProducts,
  deleteProductByName,
  updateProductDetails,
};
