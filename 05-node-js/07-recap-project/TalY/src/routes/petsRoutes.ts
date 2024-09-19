import express from 'express';
import { get } from 'http';
import { getAllPets } from '../controllers/pets/getPetsCont';
import { addPet } from '../controllers/pets/setPetsCont';
const router = express.Router();

router.get('/get-all-pets', getAllPets);
router.post('/add-pet', addPet);


export default router