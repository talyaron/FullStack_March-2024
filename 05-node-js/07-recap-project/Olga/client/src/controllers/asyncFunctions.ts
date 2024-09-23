import { Pet, pets } from "../models/petModel";

export async function getDataFromDB() {
    const response = await fetch('api/pets/get-all-pets');
    pets.splice(0, pets.length);
    const petsDB: Pet[] = await response.json();
    petsDB.forEach((pet) => {
        pets.unshift(new Pet(pet.id, pet.name, pet.type, pet.breed, pet.story, pet.shortStory, pet.image, pet.care));
    });
  }