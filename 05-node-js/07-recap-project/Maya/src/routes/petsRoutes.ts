import express from 'express';
import {getAllPets} from '../controllers/pets/getAllPetsCont';
import{addPet} from '../controllers/pets/setpetscont';
import {updatePetById} from '../controllers/pets/updatePetById';
import {deletePetById} from '../controllers/pets/deletePetById';
import {getPetById} from '../controllers/pets/getPetById';
import {get} from 'http';

const router = express.Router();

router.get('/get-all-pets', getAllPets) 
router.post('/add-pet', addPet);
router.get('/get-pet/:id',getPetById)
router.put('/update-pet/:id', updatePetById)
router.delete('/delete-pet/:id', deletePetById)


export default router;

