interface Recipe {
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    imageURL?: string;
}

// Function to fetch and display all recipes
async function getRecipes() {
    try {
        const response = await fetch('/recipes/get-recipes');
        if (!response.ok) throw new Error('Failed to fetch recipes');

        const jsonResponse = await response.json();
        console.log('Fetched recipes:', jsonResponse);

        renderRecipes(jsonResponse.recipes); // Assuming 'recipes' is an array in the response
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

// Function to render recipes in the HTML
function renderRecipes(recipes: Recipe[]) {
    try {
        const recipesContainer = document.getElementById('recipeList');
        if (!recipesContainer) throw new Error('Recipe list container not found');

        recipesContainer.innerHTML = ''; // Clear any existing recipes
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.imageURL || 'default-image.jpg'}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions.join('. ')}</p>
            `;
            recipesContainer.appendChild(recipeCard);
        });
    } catch (error) {
        console.error('Error rendering recipes:', error);
    }
}

// Function to search recipes by name
async function searchRecipes() {
    try {
        const searchQuery = (document.getElementById('searchQuery') as HTMLInputElement).value;
        const response = await fetch(`/recipes/search-recipes?query=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) throw new Error('Failed to fetch search results');

        const jsonResponse = await response.json();
        console.log('Search results:', jsonResponse);

        renderRecipes(jsonResponse.recipes); // Assuming 'recipes' is an array in the response
    } catch (error) {
        console.error('Error searching recipes:', error);
    }
}

// Add event listener to the search button
document.getElementById('searchButton')?.addEventListener('click', searchRecipes);

// Initial call to display all recipes on page load
getRecipes();
