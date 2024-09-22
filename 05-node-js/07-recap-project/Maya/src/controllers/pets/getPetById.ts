import { Pet, pets } from "../../module/petModule";

export function getPetById(req: any, res: any) {
try {
    const { id } = req.params;
    const pet = pets.find(p => p.Id === id);
    if (!pet) {
        return res.status(404).json({ error: "Pet not found" });
    }   
         res.send({ pet });

    
} catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');

}
}