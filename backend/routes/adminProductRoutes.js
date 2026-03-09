const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Routes
router.post("/", protect, addProduct);
router.get("/", getProducts);
router.put("/:productId", protect, updateProduct);
router.delete("/:productId", protect, deleteProduct);

module.exports = router;