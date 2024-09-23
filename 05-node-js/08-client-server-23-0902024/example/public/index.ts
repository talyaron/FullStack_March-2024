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