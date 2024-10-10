import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
  });



export const Book = mongoose.model('Book', bookSchema);

export interface IBook extends Document {
  title: string;
  author: mongoose.Schema.Types.ObjectId; // Reference to the Author model
}