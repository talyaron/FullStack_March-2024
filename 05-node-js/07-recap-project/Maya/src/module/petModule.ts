export class Pet{
    Id: String;
    name:string
    species: String
    yearOfBirth: number;
    price: number;
    constructor( name:string,species:String, age:number,price:number){
      this.Id = Math.random().toString();
      this.name = name;
      this.species = species;
      this.yearOfBirth = new Date().getFullYear() - age;
      this.price = price;
    }
    }

   export const pets:Pet[] = [
        new Pet("Albert",5, 100,"labrador"),
        new Pet("Goldy", 10, 50,"labrador"),
        new Pet("Sam", 2, 20,"golden retriever"),
    ]