import mongoose from "mongoose";

export const chapterCommentSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    createdAt: { type: Date, default: Date.now },
    lastUpdated: Date,
    replies: { type: mongoose.Schema.Types.ObjectId, ref: 'ChapterComment' }
})

export const ChapterComment = mongoose.model('Chapter', chapterCommentSchema);