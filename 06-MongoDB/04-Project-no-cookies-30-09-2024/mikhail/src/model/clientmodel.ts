import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    
  });

export const ClientModel = mongoose.model('Client', clientSchema);