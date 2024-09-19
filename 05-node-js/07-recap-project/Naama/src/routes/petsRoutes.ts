import express from 'express'
import { getallpets } from '../controllers/pets/getpetscont'
const router = express.Router()

router.get("/get-all-pets",getallpets)

export default router