// backend/routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  placeOrder,
  getUserOrders
} = require("../controllers/orderController");

// Place an order
router.post("/", protect, placeOrder);

// Get orders of logged-in user
router.get("/", protect, getUserOrders);

module.exports = router;