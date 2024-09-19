import express from 'express';
import {getAllPets} from '../controllers/pets/getAllPetsCont';
import {get} from 'http';

const router = express.Router();

router.get('/get-all-pets', getAllPets) 

export default router;