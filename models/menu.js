import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredints: {
    type: [String],
    default: [],
  },
  num_sales: {
    type: Number,
    default: 0,
  },
});

const Menu = mongoose.model("Menu", menuItemSchema);

export default Menu;
