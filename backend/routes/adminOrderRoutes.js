const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

// Get all orders (admin only)
router.get("/", protect, admin, async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
});

// Update order status (admin only)
router.put("/:orderId/deliver", protect, admin, async (req, res) => {
  const order = await Order.findById(req.params.orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });

  order.isDelivered = true;
  order.deliveredAt = Date.now();
  await order.save();

  res.json({ message: "Order marked as delivered", order });
});

module.exports = router;