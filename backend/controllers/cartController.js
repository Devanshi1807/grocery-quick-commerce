// backend/controllers/cartController.js
const Cart = require("../models/Cart");
const Product = require("../models/Product"); // optional if you want to populate product details

// ===================== Add to Cart =====================
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    // Check if the cart exists
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    // Check if product is already in the cart
    const productIndex = cart.items.findIndex(
      item => item.product.toString() === productId
    );

    if (productIndex > -1) {
      // If exists, update quantity
      cart.items[productIndex].quantity += quantity;
    } else {
      // If not, add new product
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();

    // Populate product details for response
    await cart.populate("items.product");

    res.status(200).json({
      message: "Product added to cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===================== Get Cart =====================
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );

    if (!cart) {
      return res.status(200).json({ message: "Cart is empty", cart: [] });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ===================== Remove from Cart =====================
exports.removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      item => item.product.toString() !== req.params.productId
    );

    await cart.save();

    await cart.populate("items.product");

    res.status(200).json({
      message: "Item removed from cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};