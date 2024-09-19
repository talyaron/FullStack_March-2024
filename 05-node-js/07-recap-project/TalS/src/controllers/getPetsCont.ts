import { Pet, Pets } from "../models/petsModel";

export function getAllPets(req:any,res:any) {
    try {
        res.send({});
    } catch (error) {
        console.error(error);
    }
}
