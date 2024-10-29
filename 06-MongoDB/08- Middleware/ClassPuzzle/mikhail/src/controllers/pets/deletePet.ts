import { Pet } from "../../model/pets/petModel";

export async function deletePet(req: any, res: any) {
    try {
        const petId = req.params.id;

        const result = await Pet.findByIdAndDelete(petId);

        if (result) {
            res.status(200).json({ message: "Pet deleted successfully" });
        } else {
            res.status(404).json({ message: "Pet not found" });
        }
    } catch (error) {
        console.error("Error deleting pet:", error);
        res.status(500).json({ message: "Failed to delete pet" });
    }
}
