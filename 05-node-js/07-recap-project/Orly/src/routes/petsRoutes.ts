import express from 'express'
import {get} from 'http';
import{getAllPets} from '../controller/getPetsCont';
const router = express.Router()

router.get('/get-all-pets', getAllPets)

export default router

