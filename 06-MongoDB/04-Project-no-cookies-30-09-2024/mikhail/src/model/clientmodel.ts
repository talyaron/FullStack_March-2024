import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    country: { type: String, required: true },
    displayName: { type: String, required: true },
    
    
  });

export const ClientModel = mongoose.model('Client', clientSchema);