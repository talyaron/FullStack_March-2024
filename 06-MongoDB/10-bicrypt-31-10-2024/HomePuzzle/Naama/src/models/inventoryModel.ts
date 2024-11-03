import mongoose from "mongoose";
export const InventorySchema = new mongoose.Schema({
    owner: { type:mongoose.Schema.Types.ObjectId,ref:'User'},
    items: { type:mongoose.Schema.Types.ObjectId,ref:'Item'},
    private: {type:Boolean,default:false}
});
export const Inventory = mongoose.model('Inventory',InventorySchema);