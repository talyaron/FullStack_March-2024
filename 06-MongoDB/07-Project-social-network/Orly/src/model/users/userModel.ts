import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    profileImage: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    }
})

export const User = mongoose.model('User',UserSchema);