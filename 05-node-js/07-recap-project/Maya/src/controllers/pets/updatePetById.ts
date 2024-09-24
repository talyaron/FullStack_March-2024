import { pets } from '../../module/petModule';

export function updatePetById(req: any, res: any) {
    try {
        const { id } = req.params;
        const { name, species, age, price } = req.body;

        if (!name &&!species &&!age &&!price) {
            return res.status(400).json({ error: "No fields to update" });
        }
        const petIndex = pets.findIndex(p => p.id === id);

        if (petIndex === -1) {
            return res.status(404).json({ error: "Pet not found" });
        }

        if (name) pets[petIndex].name = name;
        if (species) pets[petIndex].species = species;
        if (age) pets[petIndex].yearOfBirth = new Date().getFullYear() - age;
        if (price) pets[petIndex].price = price;

        res.send({ pet: pets[petIndex], message: "Pet updated successfully", ok: true, pets });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
        
    }
}
