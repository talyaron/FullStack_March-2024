export class Pet {
  Id: String;
  name: string;
  species: String;
  yearOfBirth: number;
  price: number;

  constructor(name: string, species: String, age: number, price: number) {
      this.Id = Math.random().toString();
      this.name = name;
      this.species = species;
      this.yearOfBirth = new Date().getFullYear() - age;
      this.price = price;
  }
}

export const pets: Pet[] = [
  new Pet("Albert", "labrador", 5, 100),
  new Pet("Goldy", "labrador", 10, 50),
  new Pet("Sam", "golden retriever", 2, 20),
];
