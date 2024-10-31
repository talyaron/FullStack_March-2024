import { Request, Response } from 'express';
import pets from '../../model/pets/petModel';
import users from '../../model/users/userModel';

//Get all pets
export const getAllPets = async (req: Request, res: Response) => {
    try {
        const pets = await Pet.find();
        res.json({ pets });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch pets' });
    }       
}     


//update pet price  
export const updatePetPrice = async (req: Request, res: Response) => {
    try {
        const { price } = req.body;     
        const pet = await Pet.findByIdAndUpdate(req.params.id, { price }, { new: true });
        if(!pet) return res.status(404).json({ message: 'Pet not found' }); 
        res.json({message:'Pet price updated', pet});
    } catch (error) {
        res.status(500).json({ message: 'Failed to update pet price' });
    }
}

//Delete user by ID
export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({ message: 'User not found' }); 
        res.json({message:'User deleted', user});
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user' });
    }
}

