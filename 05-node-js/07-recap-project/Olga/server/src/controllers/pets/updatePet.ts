import { pets } from "../../models/petsModel";

export function updatePet(req: any, res: any) {
    try {
        const { id } = req.params;
        const { name, type, breed, story, shortStory, image, care } = req.body;
        const pet = pets.find(p => p.id === id);
        if (!pet) {
            return res.status(404).json({ error: "Pet not found" });
        }
        pet.name = name;
        pet.type = type;
        pet.breed = breed;
        pet.story = story;
        pet.shortStory = shortStory;
        pet.image = image;
        pet.care = care;
        res.send({ pet });
    } catch (error) {
        console.error(error);
    }
}