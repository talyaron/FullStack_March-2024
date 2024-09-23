// model
class Pet {
  id: string;
  name: string;
  species: string;
  age: number;
  price: number;
  imageURL?: string;

  constructor(
    id: string,
    name: string,
    species: string,
    age: number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.age = new Date().getFullYear() - age;
    this.price = price;
  }
}

async function getAllPet(): Promise<Pet[]> {
  try {
    const url = "/api/pets/get-all-pets";
    const req = await fetch(url);
    const pets = await req.json();
    console.log(pets.pets);
    return pets.pets;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function main() {
  const pets = await getAllPet();
  if (pets.length === 0) {
    console.error("No pets found");
    return;
  }
  const petsDiv = document.getElementById("pets") as HTMLElement;
  renderPets(pets, petsDiv);
}

//view
function renderPet(pet: Pet) {
  const html = `
    <div class="pet">
    <img src="${pet.imageURL}" alt="${pet.name}">
    <h2>${pet.name}</h2>
    <p>${pet.species}</p>
    <p>${pet.age}</p>
    <p>${pet.price}</p>
    <div class="buttons">
        <button class="btn btn-danger" onclick="handleDeletePet(event)"" id="delete-${pet.id}">Delete</button>  
        <button class="btn btn-warning" onclick="handleEditPet(event)" id="edit-${pet.id}">Edit</button>  
     </div>
    </div>`;
  return html;
}

function handleEditPet(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const id = form.id.split("-")[1];
    console.log("edit", id);
  } catch (error) {
    console.error(error);
  }
}

function handleDeletePet(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const id = form.id.split("delete-")[1];
    console.log("delete", id);
    deletePet(id);
  } catch (error) {
    console.error(error);
  }
}

async function deletePet(id: string) {
  try {
    const url = `/api/pets/delete-pet-id/${id}`;
    const req = await fetch(url);
    const data = await req.json();
    if (data.ok) {
      console.log("Pet deleted");
      main();
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

function renderPets(pets: Pet[], domElement: HTMLElement) {
  try {
    const html = pets.map((pet) => renderPet(pet)).join("");
    if (!domElement) throw new Error("No element found");
    domElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
