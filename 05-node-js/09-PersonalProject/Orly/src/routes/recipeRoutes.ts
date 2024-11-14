import express from 'express';
import { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe }  from '../controllers/recipeController/getRecipes';

const router = express.Router();

router.get('/get-user-recipes', getRecipes);
router.get('/get-recipe/:id', getRecipes);
router.post('/create-recipe', createRecipe);
router.get('/get-recipe', getRecipes);
router.get('/get-recipe-by-id/:id', getRecipeById);
router.put('/update-recipe/:id', updateRecipe);
router.delete('/delete-recipe:id', deleteRecipe);


export default router;
