// src/routes/categoryRoutes.ts
import { Router } from 'express';
import { createCategory, getAllCategories, updateCategory, deleteCategory } from '../controllers/categoryController';

const router: Router = Router();

// Route to create a new category
router.post('/', createCategory);

// Route to get all categories
router.get('/', getAllCategories);

// Route to update a category by its ID
router.put('/:id', updateCategory);

// Route to delete a category by its ID
router.delete('/:id', deleteCategory);

export default router;
