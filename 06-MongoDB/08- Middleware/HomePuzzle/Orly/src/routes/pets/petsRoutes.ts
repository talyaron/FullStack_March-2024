import express from 'express';
import { getPets, updatePetPrice, deleteUser } from '../../controllers/pets/adminPets';
import { getAllUsers } from '../../controllers/users/getUser';
import { isAdmin } from '../../controllers/middlwares/adminMid';

const router = express.Router();

router.get('/all-users', isAdmin, getAllUsers);
router.delete('/delete-user/:id', isAdmin, deleteUser);
router.put('/update-pet-price/:id', isAdmin, updatePetPrice);

export default router;