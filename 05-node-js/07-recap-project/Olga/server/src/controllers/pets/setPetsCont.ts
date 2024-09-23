import { Pet, pets } from "../../models/petsModel";

export function addPet(req: any, res: any) {
    try {
        // const id = pets.length + 1;
        const { name, type, breed, story, shortStory, image, care } = req.body;
        const pet = new Pet(name, type, breed, story, shortStory, image, care);
        pets.push(pet);
        // console.log(pets[0]);
        res.status(201).send(pet);
    } catch (error: any) {
        console.error(error);
        res.status(500).send("Internal server error", error.message);
    }
}