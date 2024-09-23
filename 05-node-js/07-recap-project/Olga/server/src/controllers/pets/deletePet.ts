import { pets } from "../../models/petsModel";

export function deletePet(req: any, res: any) {
    try {
        const id = req.params.id;
        const petIndex = pets.findIndex((pet) => pet.id === id);
        if (petIndex === -1) {
            res.status(404).send('Pet not found');
        } else {
            // const pet = pets.findIndex((pet) => pet.id !== id);
            pets.splice(petIndex, 1);
            res.status(200).send(pets);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
}