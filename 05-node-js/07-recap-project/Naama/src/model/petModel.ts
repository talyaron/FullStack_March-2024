export class Pet{
    id:string;
    name:string;
    species:string;
    price:number;
    yearOfBirth:number;
  
    constructor(name:string,species:string,age:number,price:number){
      this.id=crypto.randomUUID();
      this.name = name;
      this.species = species;
      this.yearOfBirth = new Date().getFullYear() - age;
      this.price = price;
    }
  }

 export const pets:Pet[] = [
    new Pet("bob","dog",3,3000),
 ]