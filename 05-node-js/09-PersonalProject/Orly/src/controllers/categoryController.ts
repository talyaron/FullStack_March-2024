// src/controllers/categoryController.ts
import { Request, Response } from 'express';
import {Category}  from '../model/category'; 

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description, parentCategoryId } = req.body;
    const newCategory = new Category({ name, description, parentCategoryId });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Error creating category' });
  }
};

// Get all categories
export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find().populate('parentCategoryId'); // Populate parent category if hierarchy is used
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching categories' });
  }
};

// Update a category
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, parentCategoryId } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, description, parentCategoryId },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Error updating category' });
  }
};

// Delete a category
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting category' });
  }
};
