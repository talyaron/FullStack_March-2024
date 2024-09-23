import { Pet } from "../models/petModel";

export function getRandomAnimals(pets: Pet[], count = 6) {
    // Create a shallow copy of the animalList to avoid modifying the original array
    const shuffledPets = [...pets];
  
    // Shuffle the array using Fisher-Yates shuffle algorithm
    for (let i = shuffledPets.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledPets[i], shuffledPets[randomIndex]] = [shuffledPets[randomIndex], shuffledPets[i]];
    }
  
    // Return the first 'count' animals from the shuffled array
    return shuffledPets.slice(0, count);
  }

  