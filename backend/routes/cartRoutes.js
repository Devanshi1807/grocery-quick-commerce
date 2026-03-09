// backend/routes/cartRoutes.js
const express = require("express");
const router = express.Router();

const { addToCart, getCart, removeFromCart } = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware"); // JWT auth middleware

// ===================== CART ROUTES =====================

// Add item to cart (protected)
router.post("/", protect, addToCart);

// Get all items in cart (protected)
router.get("/", protect, getCart);

// Remove an item from cart by productId (protected)
router.delete("/:productId", protect, removeFromCart);

module.exports = router;