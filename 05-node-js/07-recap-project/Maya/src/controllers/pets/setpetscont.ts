import { Pet, pets } from "../../module/petModule";

export function addPet(req: any, res: any) {
    try {
        const { name, species, age, price } = req.body;
                if (!name || !species || !age || !price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newPet = new Pet(name, species, age, price);
        pets.push(newPet);

        res.send({ newPet, ok: true });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
}
