export class Pet{
    id:string;
    name:string;
    species:string;
    age:number;
    price:number;
    imageURL?:string;
 
    constructor(name:string,species:string,age:number,price:number){
     this.id=crypto.randomUUID();
     this.name=name;
     this.species=species;
     this.age=new Date().getFullYear()-age;
     this.price=price;
    }
 
 }
 export const pets:Pet[]=[new Pet('rocky','dog',13,50)];