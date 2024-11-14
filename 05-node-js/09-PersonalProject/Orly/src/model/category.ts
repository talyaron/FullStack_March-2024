
import mongoose, { Document, mongo, Schema } from 'mongoose';

interface ICategory extends Document {
  name: string;
  description?: string;
  parentCategoryId?: mongoose.Types.ObjectId; 
}

const CategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  parentCategoryId: {
    type: mongoose.Types.ObjectId,
    ref: 'Category', 
    default: null
  }
});


export const Category = mongoose.model('Category',CategorySchema);
