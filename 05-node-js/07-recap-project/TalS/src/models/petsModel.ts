export class Pet {
    id:string;
    name:string;
    species:string;
    age:number;
    price:number;
    constructor(name:string, species:string, age:number, price:number) {
      this.id=crypto.randomUUID();
      this.name=name;
      this.species=species;
      this.age=age;
      this.price=price;
    }
  }

  export const pets:Pet[] = [
  new Pet('buddy', 'dog', 3, 500)
]