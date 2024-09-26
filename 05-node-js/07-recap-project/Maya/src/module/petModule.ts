export class Pet {
  id: String;
  name: string;
  species: String;
  yearOfBirth: number;
  price: number;
  imageURL?: string;


  constructor(name: string, species: String, age: number, price: number,imageURL?: string) {
      this.id = Math.random().toString();
      this.name = name;
      this.species = species;
      this.yearOfBirth = new Date().getFullYear() - age;
      this.price = price;
      this.imageURL = imageURL;
  }
}

export const pets: Pet[] = [
  new Pet("Albert", "labrador", 5, 100),
];
