class Pet {
    Id: string;
    species: string;
    yearOfBirth: number;
    price: number;
    imageurl: string;

    constructor(species: string, age: number, price: number) {
        this.Id = Math.random().toString();
        this.species = species;
        this.yearOfBirth = new Date().getFullYear() - age;
        this.price = price;
        this.imageurl = this.imageurl
    }
}

const apiUrl = 'http://localhost:3000/pets';

async function handleAddPet(event: Event) {
    event.preventDefault();

    const name = (document.getElementById('pet-name') as HTMLInputElement).value;
    const species = (document.getElementById('pet-species') as HTMLInputElement).value;
    const age = parseInt((document.getElementById('pet-age') as HTMLInputElement).value);
    const price = parseFloat((document.getElementById('pet-price') as HTMLInputElement).value);
    const imageUrl = (document.getElementById('pet-image') as HTMLInputElement).value;

    createPet(species, age, price, imageUrl);
}

// Create Pet (POST)
async function createPet(species: string, age: number, price: number,imageUrl:string) {
    const newPet = { species, age, price, imageUrl };
        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPet),
    });

    if (response.ok) {
        getAllPets(); 
    } else {
        console.error('Error creating pet');
    }
}

async function getAllPets() {
    const response = await fetch(apiUrl);

    if (response.ok) {
        const data = await response.json();
        renderPets(data.pets);
    } else {
        console.error('Error fetching pets');
    }
}

function renderPets(pets: Pet[]) {
    const petContainer = document.getElementById('pet-container');
    if (!petContainer) {
        console.error('No element with ID "pet-container" found.');
        return;
    }

    petContainer.innerHTML = ''; 

    pets.forEach(pet => {
        const petElement = document.createElement('div');
        petElement.innerHTML = `
            <h3>${pet.species}</h3>
            <p>Year of Birth: ${pet.yearOfBirth}</p>
            <p>Price: ${pet.price}</p>
            <button onclick="deletePet('${pet.Id}')">Delete</button>
            <button onclick="editPet('${pet.Id}')">Edit</button>
        `;
        petContainer.appendChild(petElement);
    });
}

// Update Pet (PUT)
async function updatePet(id: string, species: string, age: number, price: number) {
    const updatedPet = { species, yearOfBirth: new Date().getFullYear() - age, price };

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPet),
    });

    if (response.ok) {
        getAllPets(); 
    } else {
        console.error('Error updating pet');
    }
}

// Delete Pet (DELETE)
async function deletePet(id: string) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        getAllPets();
    } else {
        console.error('Error deleting pet');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getAllPets();
});
