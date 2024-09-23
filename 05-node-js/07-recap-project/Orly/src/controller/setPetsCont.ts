import{ Pet, pets} from "../model/petsModel";

export function addPet (req: any, res: any){
    try {
        const{name, species, age, price } = req.body;
        if(!name|| !species||age || !price){
            return res.status(400).send('Missing data');
        }
        const newPet = new Pet (name, species, age, price);
        pets.push(newPet);
        res.status(200).send({newPet, ok:true})
    } catch (error: any) {
        console.error(error);
        res.status(500).send('Internal server error', error.message);
    }
}
