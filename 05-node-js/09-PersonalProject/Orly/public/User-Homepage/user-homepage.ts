interface Recipe {
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    imageURL?: string;
}

async function getUser() {
    try {
        const response = await fetch('/users/getUser');
        if (!response.ok) throw new Error('Failed to fetch user data');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        if (jsonResponse.user) {
            WelcomeUser(jsonResponse.user.name, document.getElementById('userName'));
        } else {
            window.location.href = './../login/login.html';
        }
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

async function WelcomeUser(userName: string, element: HTMLElement | null) {
    try {
        if (!element) throw new Error('Element not found');
        element.innerHTML = `Welcome ${userName}`;
    } catch (error) {
        console.error(error);
    }
}

async function getUserRecipes() {
    try {
        const response = await fetch('/users/get-user-recipes');
        if (!response.ok) throw new Error('Failed to fetch user recipes');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        renderUserRecipes(jsonResponse.recipes); // Assuming 'recipes' is in the response
    } catch (error) {
        console.error('Error fetching user recipes:', error);
    }
}

function renderUserRecipes(recipes: Recipe[]) {
    try {
        const recipesContainer = document.getElementById('recipeList');
        if (!recipesContainer) throw new Error('Element not found');
        
        recipesContainer.innerHTML = ''; // Clear previous recipes
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.imageURL || 'default-image.jpg'}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                <p>Instructions: ${recipe.instructions.join('. ')}</p>
            `;
            recipesContainer.appendChild(recipeCard);
        });
    } catch (error) {
        console.error('Error rendering user recipes:', error);
    }
}

// Render Favorites
function renderFavorites(recipes: Recipe[]) {
    try {
        const favoritesContainer = document.getElementById('favorites');
        if (!favoritesContainer) throw new Error('Element not found');
        
        favoritesContainer.innerHTML = ''; // Clear previous favorites
        recipes.forEach(recipe => {
            const favoriteCard = document.createElement('div');
            favoriteCard.classList.add('favorite-card');
            favoriteCard.innerHTML = `
                <img src="${recipe.imageURL || 'default-image.jpg'}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
            `;
            favoritesContainer.appendChild(favoriteCard);
        });
    } catch (error) {
        console.error('Error rendering favorites:', error);
    }
}

async function getFavorites() {
    try {
        const response = await fetch('/users/get-favorites');
        if (!response.ok) throw new Error('Failed to fetch favorites');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        renderFavorites(jsonResponse.favorites); // Assuming 'favorites' is in the response
    } catch (error) {
        console.error('Error fetching favorites:', error);
    }
}

// Profile functions
async function getProfile() {
    try {
        const response = await fetch('/users/get-profile');
        if (!response.ok) throw new Error('Failed to fetch profile');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        // You might want to populate profile fields here
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

async function updateProfile(data: { username: string; email: string; avatar?: File }) {
    try {
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('email', data.email);
        if (data.avatar) formData.append('avatar', data.avatar);
        
        const response = await fetch('/users/update-profile', {
            method: 'PUT',
            body: formData,
        });
        if (!response.ok) throw new Error('Failed to update profile');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    } catch (error) {
        console.error('Error updating profile:', error);
    }
}

async function deleteProfile() {
    try {
        const response = await fetch('/users/delete-profile', { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete profile');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        // Optionally, redirect the user after deletion
        window.location.href = './../login/login.html';
    } catch (error) {
        console.error('Error deleting profile:', error);
    }
}

async function searchRecipes() {
    try {
        const response = await fetch('/users/search-recipes');
        if (!response.ok) throw new Error('Failed to search recipes');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        
        // You might want to populate search results here
    } catch (error) {
        console.error('Error searching recipes:', error);
    }
}
// Initial Calls
getUser();
getUserRecipes();
getFavorites();
