import mongoose from "mongoose";

 export const gameSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    imageURL: String,
    genre: String,
    cart: Boolean,
    owned: Boolean,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    status: { type: String, enum: ['cart', 'sold','none'], default: 'none' }
  });
  
  export const gameModel = mongoose.model('Game', gameSchema);