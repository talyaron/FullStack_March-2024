import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    chapters: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
    author:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subAuthor: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    subscribed:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    lastUpdated: Date,
    privecy: String,
    bookCover: String
})

export const Book = mongoose.model('Book', bookSchema);