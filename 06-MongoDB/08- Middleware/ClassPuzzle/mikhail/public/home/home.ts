
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
    id:String;
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
            <button id="delete">Delete pet</button>
            `;
            petsContainer.appendChild(petElement);
            const button=document.querySelector("#delete") as HTMLButtonElement;
        button.addEventListener("click",()=>{
            handleDeletePet(pet.id);
   });
        });
        
    } catch (error) {
        console.error(error);
    }
}
async function handleDeletePet(petId){
    try {
        const response = await fetch(`/posts/${petId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            console.log("Pet deleted successfully");
            window.location.reload();
        }
        else{
            console.error("Error deleting pet:", jsonResponse.message);
        }
    } catch (error) {
        
    }
}