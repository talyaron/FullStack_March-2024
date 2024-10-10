import { PetModel } from "../model/petModel";

export async function updatePetID(req: any, res: any) {
  try {

    const { petID } = req.params;
    const { price, age,species,name } = req.body;
    console.log(petID);
    console.log(price);

    if (!petID) throw new Error("bad pet ID");
    if (!price) throw new Error("bad update info")

    const pet = await PetModel.findById(petID);
    if(!pet) throw new Error("no pets availiable to update!");

    if (age) pet.setAge(age);
    if (price) pet.setPrice(price);
    if (species) pet.setSpecies(species);
    if(name) pet.setName(name);

    res.send({ ok: 'all good', pet })
  } catch (error: any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}