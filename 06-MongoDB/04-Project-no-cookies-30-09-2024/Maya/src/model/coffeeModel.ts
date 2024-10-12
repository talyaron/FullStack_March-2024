const mongoose = require('mongoose');
const { Schema } = mongoose;

export const productSchema = new Schema({
  id: {type: crypto.randomUUID().toString},
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  description: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;