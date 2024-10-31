async function deletePets(req: any, res: any, next: NextFunction) {
    try {
        const { petId } = req.body;
        await PetModel.findByIdAndDelete(petId);
        const pets = await PetModel.find(); 
        res.send({ pets });
    } catch (error) {   
        console.error(error);
        res.send({ ok: false, error: error.message });  
    }
}