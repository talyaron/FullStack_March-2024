import express from 'express'
import {get} from 'http';
import {  getPetByID, updatePet, deletePet } from '../controller/getPetsCont';
import{getAllPets} from '../controller/getPetsCont';
import { addPet } from '../controller/setPetsCont';
const router = express.Router()

router.get('/get-all-pets', getAllPets);
router.post('/set-Pets', addPet);  
router.get('/get-pet-by-id', getPetByID);    
router.put('/update-pet-by-id', updatePet);      
router.delete('/delete-pet-by-id', deletePet);

export default router;

