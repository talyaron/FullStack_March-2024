// Search.ts
interface Recipe {
    id: string;
    name: string;
    ingredients: string[];
    category: string;
    cookingTime: number;
  }
  
  class RecipeSearch {
    recipes: Recipe[];
  
    constructor(recipes: Recipe[]) {
      this.recipes = recipes;
    }
  
    searchByName(name: string): Recipe[] {
      return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
    }
  
    searchByIngredients(ingredients: string[]): Recipe[] {
      return this.recipes.filter(recipe => ingredients.every(ing => recipe.ingredients.includes(ing)));
    }
  
    filterByCategory(category: string): Recipe[] {
      return this.recipes.filter(recipe => recipe.category === category);
    }
  
    filterByCookingTime(maxTime: number): Recipe[] {
      return this.recipes.filter(recipe => recipe.cookingTime <= maxTime);
    }
  }
  