import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      require: true,
      default: true,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("Items", itemSchema);
export default ItemModel;
