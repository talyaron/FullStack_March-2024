import mongoose from "mongoose";
export const StreetSchema = new mongoose.Schema({
    name:{type:String, required:true},
    house1:{type:mongoose.Schema.Types.ObjectId,ref:'House',default:null},
    house2:{type:mongoose.Schema.Types.ObjectId,ref:'House',default:null},
    house3:{type:mongoose.Schema.Types.ObjectId,ref:'House',default:null},
    house4:{type:mongoose.Schema.Types.ObjectId,ref:'House',default:null},
    house5:{type:mongoose.Schema.Types.ObjectId,ref:'House',default:null},
    nextStreet:{type:mongoose.Schema.Types.ObjectId,ref:'Street',default:null},
    previusStreet:{type:mongoose.Schema.Types.ObjectId,ref:'Street',default:null}
});
export const Street = mongoose.model('Street',StreetSchema);
