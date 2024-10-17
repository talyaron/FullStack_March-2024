import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    userName: {type:String, unique:true},
    email: {type:String, unique:true},
    password: String,
    pronounce: String,
    creativeCoins:{ type: Number, default: 0},
    isAdmin:{ type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    friends: { type: mongoose.Schema.Types.ObjectId, ref: 'Friends',optional:true },
    birthday: Date,
    profileImage:{ type: String, default: "defaultPfp.jpg",optional:true }
});

export const User = mongoose.model('User', userSchema);