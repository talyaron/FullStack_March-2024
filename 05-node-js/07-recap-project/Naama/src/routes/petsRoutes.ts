import express from 'express'
import { getallpets } from '../controllers/pets/getpetscont'
import { addpet } from '../controllers/pets/setpetscont'
const router = express.Router()

router.get("/get-all-pets",getallpets)
router.post("/add-pet",addpet)

export default router