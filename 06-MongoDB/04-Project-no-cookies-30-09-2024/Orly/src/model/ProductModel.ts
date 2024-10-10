import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
  
    name: { type: String, required: true },
    price: { type: Number, required: true },
    department: { type: String, required: true },
    imageURL: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    status: { type: String, enum:['cart', 'sold', 'available'], default: 'available'}
})

export const ProductModel = mongoose.model('Product', ProductSchema);