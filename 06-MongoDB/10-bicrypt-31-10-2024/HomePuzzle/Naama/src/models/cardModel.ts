import mongoose from "mongoose";
export const CardSchema = new mongoose.Schema({
    name:{type:String,requried:true},
    serialNumber:{type:Number,requried:true},
    image: {type:String,required:true},
    amount: {type:Number,required:true}
});
export const Card = mongoose.model('Card',CardSchema);