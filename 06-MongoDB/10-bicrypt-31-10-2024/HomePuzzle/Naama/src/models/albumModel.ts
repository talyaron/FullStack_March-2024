import mongoose from "mongoose";
export const AlbumSchema = new mongoose.Schema({
    owner: { type:mongoose.Schema.Types.ObjectId,ref:'User'},
    cards: { type:mongoose.Schema.Types.ObjectId,ref:'Card'},
    private: {type:Boolean,default:false}
});
export const Album = mongoose.model('Album',AlbumSchema);