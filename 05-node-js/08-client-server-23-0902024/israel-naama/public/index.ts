// model
class Pet {
    id: string;
    name: string;
    species: string;
    age: number;
    price: number;
    imageURL?: string;

    constructor(id: string, name: string, species: string, age: number, price: number) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.age = new Date().getFullYear() - age;
        this.price = price;
    }
}

//view
function renderPet(pet: Pet) {
    const html = `
    <img src="${pet.imageURL}" alt="${pet.name}">
    <h2>${pet.name}</h2>
    <p>${pet.species}</p>
    <p>${pet.age}</p>
    <p>${pet.price}</p>
    `;
    return html;
}

function renderPets(pets: Pet[], domElement: HTMLElement) {
    try {
        const html = pets.map(pet => renderPet(pet)).join('');
        if (!domElement) throw new Error('No element found');
        domElement.innerHTML = html

    } catch (error) {
        console.error(error);

    }

}

async function getPets() {
    try {
        const response = await fetch('/pets/get-all-pets');
        const data = await response.json();
        console.log(data);
        const array = JSON.parse(data)
        console.log(array);
        const petArray: Pet[] = array.map(pet => {
            return new Pet (pet.id, pet.name, pet.species, pet.age, pet.price);
               
        });
        console.log(petArray);
        
        
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const div = document.querySelector('#pets') as HTMLDivElement;
const pets = getPets();
renderPets(pets, div);