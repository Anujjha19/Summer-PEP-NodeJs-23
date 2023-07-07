const express = require("express");
const router = express.Router();
const {
  createNewProduct,
  getProductByName,
  getAllProducts,
  deleteProductByName,
  updateProductDetails,
} = require("../controllers/productController");
const {
  createUser,
  getAllUsers,
  getUserByEmail,
} = require("../controllers/userController");

/* Product Routes */
router.get("/products", getAllProducts);
router.post("/products", createNewProduct);
router.get("/product", getProductByName);
router.delete("/product", deleteProductByName);
router.put("/products/:id", updateProductDetails);

/* User Routes */
router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/user", getUserByEmail);

module.exports = router;
