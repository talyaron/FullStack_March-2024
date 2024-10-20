import mongoose from "mongoose";

export const chapterSchema = new mongoose.Schema({
    bookID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    title:String,
    content: String,
    chapterComments: { type: mongoose.Schema.Types.ObjectId, ref: 'ChapterComment' },
    likes:Number
})

export const Chapter = mongoose.model('Chapter', chapterSchema);