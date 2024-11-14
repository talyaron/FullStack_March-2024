async function addRecipe() {
    try {
        const form = document.getElementById('add-recipe-form') as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const response = await fetch('/recipes/add-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.ok) {
            window.location.href = './../User-Homepage/user-homepage.html';
        } else {
            alert(jsonResponse.error);
        }
    } catch (error) {
        console.error(400, 'Recipe could not be added');
    }
};