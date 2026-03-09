// backend/models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // price cannot be negative
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0, // stock cannot be negative
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);