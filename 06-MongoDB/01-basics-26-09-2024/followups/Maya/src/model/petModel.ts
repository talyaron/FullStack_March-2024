import mongoose, { Schema, Document } from 'mongoose';


interface IPet extends Document {
    name: string;
    species: string;
    age: number;
    price: number;
    imageURL?: string;
  }

  export class Pet {
    id: string;
    name: string;
    species: string;
    age: number;
    price: number;
    imageURL?: string;
  
    constructor(name: string, species: string, age: number, price: number, imageURL?: string) {
      this.id = crypto.randomUUID();
      this.name = name;
      this.species = species;
      this.age = new Date().getFullYear() - age;
      this.price = price;
      this.imageURL = imageURL;
    }
  }

  const petSchema = new Schema<IPet>({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String }
  });

  export const PetModel = mongoose.model<IPet>('Pet', petSchema);

  export const saveNewPet = async () => {
    try {
      const newPet = new PetModel({
        name: 'Fluffy',
        species: 'cat',
        age: 2,
        price: 100,
        imageURL: 'http://example.com/fluffy.jpg'
      });

      const savedPet = await newPet.save();
      console.log('Pet saved:', savedPet);
    } catch (err) {
      console.error('Error saving pet:', err);
    }
  };

  export const fetchPets = async () => {
    try {
      const pets = await PetModel.find();
      console.log('All pets:', pets);
    } catch (err) {
      console.error('Error fetching pets:', err);
    }
  };

  export const updatePet = async (petId: string) => {
    try {
      const updatedPet = await PetModel.findByIdAndUpdate(petId, { price: 75 }, { new: true });
      console.log('Updated pet:', updatedPet);
    } catch (err) {
      console.error('Error updating pet:', err);
    }
  };

  export const deletePet = async (petId: string) => {
    try {
      await PetModel.findByIdAndDelete(petId);
      console.log('Pet deleted');
    } catch (err) {
      console.error('Error deleting pet:', err);
    }
  };