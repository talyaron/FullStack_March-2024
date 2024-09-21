import { pets } from "../../models/petsModel";

export function getAllPets(req: any, res: any) {
    try {
        res.status(200).send(pets);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}