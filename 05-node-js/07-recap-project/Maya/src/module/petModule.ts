export class Pet{
    Id: String;
    species: String
    age: number;
    price: number;
    constructor( species:String, age:number,price:number){
    this.Id = Math.random().toString();
      this.species = species;
      this.age = age;
      this.price = price;
    }
    }

   export const pets:Pet[] = [
        new Pet("Albert", 5, 100),
        new Pet("Goldy", 3, 50),
        new Pet("Sam", 2, 20)
    ]