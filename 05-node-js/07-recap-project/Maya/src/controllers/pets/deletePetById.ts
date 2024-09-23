import { Pet, pets } from "../../module/petModule";

export function deletePetById(req: any, res: any) {
    try {
        const { id } = req.params;
        const petIndex = pets.findIndex(p => p.Id === id);
        if (petIndex === -1) {
            return res.status(404).json({ error: "Pet not found" });
        }

        const removedPet = pets.splice(petIndex, 1)[0];
        res.send({ pet: removedPet, message: "Pet deleted successfully", ok: true });
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
}