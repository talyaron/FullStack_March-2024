import { Request, Response } from 'express';
import Pet from '../../model/pets/petModel';

//get all pets
export const getAllPets = async (req: Request, res: Response) => {
    try {
        const pets = await Pet.find();
        res.json({pets});
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch pets'});
    }
};

//get pet by id
export const getPetById = async (req: Request, res: Response) => {
    try {
        const pet = await Pet.findById(req.params.id);
        res.json({pet});
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch pet'});
    }
};

//buy a pet
export const buyPet = async (req: Request, res: Response) => {
    try {
        const pet = await Pet.findById(req.params.id);
        pet.buy();
        await pet.save();
        res.json({pet});
    } catch (error) {
        res.status(500).json({message: 'Failed to buy pet'});
    }
};