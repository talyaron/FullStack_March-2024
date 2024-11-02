import mongoose from "mongoose";
export const HouseSchema = new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    street:{type:mongoose.Schema.Types.ObjectId,ref:'Street',required:true},
    welcomeMessage:{type:String,default:'ברוכים הבאים לביתי!'},
    furniture:{type:mongoose.Schema.Types.ObjectId,ref:'Inventory',default:null}
});
export const House = mongoose.model('House',HouseSchema);
