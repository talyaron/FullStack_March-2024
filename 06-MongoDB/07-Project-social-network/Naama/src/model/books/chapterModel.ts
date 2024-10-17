import mongoose from "mongoose";

export const chapterSchema = new mongoose.Schema({
    title:String,
    description: String,
    chapterComments: { type: mongoose.Schema.Types.ObjectId, ref: 'ChapterComment' },
    likes:Number
})

export const Chapter = mongoose.model('Chapter', chapterSchema);