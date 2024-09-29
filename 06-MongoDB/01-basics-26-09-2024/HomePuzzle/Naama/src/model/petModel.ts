import mongoose, { Schema } from "mongoose";

interface IPet extends Document {
    id: string;
    name: string;
    species: string;
    age: number;
    price: number;
    imageURL: string;
  
    // Method declaration
    setAge(age: number): Promise<number>;
    setName(name: string): Promise<string>;
    setPrice(price: number): Promise<string>;
    setSpecies(species: string): Promise<string>;
    setImage(image: number): Promise<string>;
}
export const PetSchema: Schema<IPet> = new Schema({
    id:String,
    name:String,
    species: String, 
    age:  Number, 
    price:  Number,
    imageURL: String,
  });

PetSchema.methods.setAge = async function (age: number): Promise<number> {
    this.age = age;  // Set the new age
    await this.save();  // Save the document after updating
    return this.age;
};
PetSchema.methods.setName = async function (name: string): Promise<string> {
    this.name = name;  // Set the new name
    await this.save();  // Save the document after updating
    return this.name;
};

PetSchema.methods.setPrice = async function (price: number): Promise<number> {
    this.price = price;  // Set the new price
    await this.save();  // Save the document after updating
    return this.price;
};

PetSchema.methods.setSpecies = async function (species: string): Promise<string> {
    this.species = species;  // Set the new species
    await this.save();  // Save the document after updating
    return this.species;
};

PetSchema.methods.setImage = async function (image: number): Promise<string> {
    this.imageURL = image;  // Set the new image URL
    await this.save();  // Save the document after updating
    return this.imageURL;
};


export const PetModel = mongoose.model<IPet>('Pet', PetSchema);
