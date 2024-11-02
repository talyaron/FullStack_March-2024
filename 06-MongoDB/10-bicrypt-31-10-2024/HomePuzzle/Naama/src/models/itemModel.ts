import mongoose from "mongoose";
export const ItemSchema = new mongoose.Schema({
    name:{type:String,requried:true},
    type:{type:String,requried:true},
    stackable:{type:Boolean,requried:true},
    description: {type:String,required:true},
    amount: {type:Number,required:true}
});
export const Item = mongoose.model('Item',ItemSchema);