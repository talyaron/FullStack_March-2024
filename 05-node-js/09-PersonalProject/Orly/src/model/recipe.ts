import mongoose, { Schema } from "mongoose";

interface Recipe extends mongoose.Document {
    title: string;
    ingredients: string[];
    instructions: string[];
    cookingTime: number;
    category: string;
    imageUrl?: string;
}

const RecipeSchema = new Schema<Recipe>({
    title: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: [String], required: true },
    cookingTime: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: false },
});

export const Recipe = mongoose.model('Recipe',RecipeSchema);
