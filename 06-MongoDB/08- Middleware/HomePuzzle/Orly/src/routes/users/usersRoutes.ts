import express from "express";
import { login, register } from "../../controllers/users/setUser";
import { getUser, getUserPets } from "../../controllers/users/getUser";
import { getAllPets, getPetById, buyPet } from '../../controllers/pets/userPets';
import { checkUser } from "../../controllers/middlwares/loginMid";

const router = express.Router();


router.post("/login", login).post("/register", register).get("/getUser",checkUser, getUser);
router.get("/get-user-pets",checkUser, getUserPets);

router.get('/get-all-pets', checkUser, getAllPets);
router.get('/pet/:id', checkUser, getPetById);
router.post('/buy-pet/:id', checkUser, buyPet);

export default router;