//create mongoose schema for Product
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  countInStock: { type: Number, required: true },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Department",
  },
});

const Product  = mongoose.model("Product", productSchema);
module.exports = mongoose.model("Product", productSchema);
export default Product;

