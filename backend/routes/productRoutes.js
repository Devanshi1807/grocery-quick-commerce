const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.post("/", addProduct);
router.get("/", getProducts);

// Update by ID
router.put("/:id", updateProduct);

// Delete by ID
router.delete("/:id", deleteProduct);

module.exports = router;