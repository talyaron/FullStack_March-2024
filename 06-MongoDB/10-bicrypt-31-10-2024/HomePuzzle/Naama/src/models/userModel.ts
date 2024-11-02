import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
username:{type:String,unique:true,required:true},
email:{type:String,unique:true,required:true},
password:{type:String,required:true},
birthday:{type:Date,required:true},
coins:{type:Number,default:0},
friends:{type:mongoose.Schema.Types.ObjectId,ref:'User',default:null},
sex:{type:Boolean,default:true},
experience:{type:Number,default:0},
id:{type:Number,unique:true,required:true},
registretionDate:{type:Date,default:Date.now()},
house:{type:mongoose.Schema.Types.ObjectId,ref:'House',required:true},
profilePicture:{type:String,default:'noPFP.png'},
partner:{type:mongoose.Schema.Types.ObjectId,ref:'User',default:null},
cardAlbum:{type:mongoose.Schema.Types.ObjectId,ref:'Album',required:true},
inventory:{type:mongoose.Schema.Types.ObjectId,ref:'Inventory', required:true},
isAdmin:{type:Boolean,default:false}
});
export const User = mongoose.model('User',UserSchema);
