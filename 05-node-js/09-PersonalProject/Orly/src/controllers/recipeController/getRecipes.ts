import {Recipe } from "../../model/recipe";


// Create a new recipe
export const createRecipe = async (req: any, res: any) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Get all recipes
export const getRecipes = async (req: any, res: any) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get a recipe by ID
export const getRecipeById = async (req: any, res: any) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Update a recipe
export const updateRecipe = async (req: any, res: any) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Delete a recipe
export const deleteRecipe = async (req: any, res: any) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(500).json(error);
    }
};
