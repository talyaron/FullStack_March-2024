import mongoose from "mongoose";

export const FriendsSchema = new mongoose.Schema({
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    friendId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: String // pending/ accepted/ rejected
})