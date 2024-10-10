import mongoose, { Document, Schema, Model, QueryWithHelpers } from 'mongoose';

// 1. Define the Pet interface extending mongoose.Document
interface IPet extends Document {
  id: string;
  name: string;
  species: string;
  age: number;
  price: number;
  imageURL: string;

  // Method declarations
  setAge(age: number): Promise<number>;
  setName(name: string): Promise<string>;
  setPrice(price: number): Promise<number>;
  setSpecies(species: string): Promise<string>;
  setImage(imageURL: string): Promise<string>;
}

// 2. Define the query helpers interface
interface IPetQueryHelpers {
  bySpecies(species: string): QueryWithHelpers<IPet[], IPetQueryHelpers>;
}

// 3. Define the static model interface, combining Document and QueryHelpers
interface IPetModel extends Model<IPet, IPetQueryHelpers> {}

// 4. Define the schema
const PetSchema = new Schema<IPet, IPetModel>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  price: { type: Number, required: true },
  imageURL: { type: String, required: true },
});

// 5. Add the query helper to the schema
PetSchema.query.bySpecies = function (species: string) {
  return this.find({ species });
};

// 6. Add instance methods to the schema
PetSchema.methods.setAge = async function (age: number): Promise<number> {
  this.age = age;
  await this.save();
  return this.age;
};

PetSchema.methods.setName = async function (name: string): Promise<string> {
  this.name = name;
  await this.save();
  return this.name;
};

PetSchema.methods.setPrice = async function (price: number): Promise<number> {
  this.price = price;
  await this.save();
  return this.price;
};

PetSchema.methods.setSpecies = async function (species: string): Promise<string> {
  this.species = species;
  await this.save();
  return this.species;
};

PetSchema.methods.setImage = async function (imageURL: string): Promise<string> {
  this.imageURL = imageURL;
  await this.save();
  return this.imageURL;
};

// 7. Create the model with the schema and query helpers
export const PetModel = mongoose.model<IPet, IPetModel>('Pet', PetSchema);