import { Pet, pets } from "../models/pet";

const petRouter = require('express').Router();

const allPets:Pet[] = pets;


petRouter.get('/all-pets', (req:any, res:any) => {
    console.log('all pets');
    res.send(allPets);
})


module.exports = petRouter;