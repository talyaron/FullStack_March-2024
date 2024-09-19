import express from 'express'
import { getAllPets } from '../controllers/getPetsCont'
const router = express.Router()

router.get('/get-all-pets',getAllPets)

export default router