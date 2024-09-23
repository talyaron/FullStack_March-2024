export class Pet {
    id:string;
    yearOfBirth:number;
    imageUrl?: string;

    constructor(public name:string, public species:string,public age:number,public price:number) {
      this.id=crypto.randomUUID();
      this.name=name;
      this.species=species;
      this.yearOfBirth= new Date().getFullYear() - age;
      this.price=price;
    }
  }

  export const pets:Pet[] = [
  new Pet('buddy', 'dog', 3, 500)
]