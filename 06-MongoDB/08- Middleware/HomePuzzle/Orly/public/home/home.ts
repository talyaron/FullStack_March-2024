import { buyPet } from '../../src/controllers/pets/userPets';

async function getUser() {
    try {
        const response = await fetch('/users/getUser');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.user) {
            helloUser(jsonResponse.user.name, document.getElementById('userName'));
        } else {
            window.location.href = './../login/login.html';
        }
       
       
    }
    catch (error) {
        console.error(error);
    }
}

getUser();

function helloUser(userName:string, element:HTMLElement|null){
    try {
        if(!element){
            throw new Error('Element not found');
        }
        element.innerHTML = `Hello ${userName}`;
    } catch (error) {
        console.error(error);
        
    }
    
}

async function getUserPets(){
    try {
        const response = await fetch('/users/get-user-pets');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      
    } catch (error) {
        console.error(error);
    }
}

getUserPets();

async function getPets(){
    try {
      
        const response = await fetch('/pets/get-pets');
        const jsonResponse = await response.json();

      
        if(jsonResponse.pets){
            renderPets(jsonResponse.pets);
        }
      
    } catch (error) {
        console.error(error);
    }
}



getPets();

//model Pets
interface Pet{
    name:string;
    age:number;
    species:string;
    price:number;
    imageURL?:string;

}

//render
function renderPets(pets: Pet[]){
    try {
        const petsContainer = document.getElementById('pets');
        if(!petsContainer){
            throw new Error('Element not found');
        }
        pets.forEach(pet => {
            const petElement = document.createElement('div');
            petElement.classList.add('pet');
            petElement.innerHTML = `
            ${pet.imageURL ? `<img src="${pet.imageURL}" alt="${pet.name}">` : ''}
            <h3>${pet.name}</h3>
            <p>Age: ${pet.age}</p>
            <p>Breed: ${pet.species}</p>
            `;
            petsContainer.appendChild(petElement);
        });
    } catch (error) {
        console.error(error);
    }
}

async function fetchPets() {
    const response = await fetch('/user/get-all-pets', { credentials: 'include' });
    const data = await response.json();
    const petsList = document.getElementById('petsList');
    petsList.innerHTML = data.pets.map(pet => `
        <div class="pet-card">
            <h3 class="pet-name">${pet.name}</h3>
            <p>Species: ${pet.species}</p>
            <p class="pet-price">Price: $${pet.price}</p>
            <button onclick="buyPet('${pet._id}')">Buy</button>
        </div>
    `).join('');
}

async function buyPet(petId) {
    const response = await fetch(`/user/buy-pet/${petId}`, {
        method: 'POST',
        credentials: 'include'
    });
    if (response.ok) {
        alert('Pet purchased successfully!');
        fetchPets(); // Refresh the pet list after purchase
    } else {
        alert('Failed to purchase pet');
    }
}