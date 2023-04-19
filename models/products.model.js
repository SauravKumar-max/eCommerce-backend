const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    originalPrice: Number,
    brand: String,
    inStock: Boolean,
    fastDelivery: Boolean,
    quantity: Number,
    ratings: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
