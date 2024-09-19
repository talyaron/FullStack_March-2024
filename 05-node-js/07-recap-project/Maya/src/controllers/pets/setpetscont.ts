import { Pet, pets } from "../../module/petModule";

export function addPet(req:any, res:any) {  
    try {
       const { name, species,age,price } = req.body; 
       if (!name ||!species ||!age ||!price) throw new Error('Missing required fields');
       return res.status(400).json.send('missing required fields');

       const newPet = new Pet(name, species, age, price);
       pets.push(newPet);
       res.send({newPet, ok: true} );
    } catch (error) {
        console.error(error);
        res.status(500).send()
    }
}