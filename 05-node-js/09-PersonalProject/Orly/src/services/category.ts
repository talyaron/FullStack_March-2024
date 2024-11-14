// Category.ts
interface Category {
    id: string;
    name: string;
    parentCategoryId?: string; // For optional hierarchy
  }
  
  class CategoryManager {
    categories: Category[] = [];
  
    createCategory(name: string, parentCategoryId?: string) {
      const newCategory = { id: `${Date.now()}`, name, parentCategoryId };
      this.categories.push(newCategory);
    }
  
    updateCategory(id: string, newName: string) {
      const category = this.categories.find(cat => cat.id === id);
      if (category) category.name = newName;
    }
  
    deleteCategory(id: string) {
      this.categories = this.categories.filter(cat => cat.id !== id);
    }
  
    getCategoryHierarchy(): Category[] {
      return this.categories; // Optionally, implement nested structure logic here
    }
  }
  