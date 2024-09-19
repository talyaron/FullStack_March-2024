console.log('Hello, TypeScript!');

class Pet{
    Id: String;
    species: String
    yearOfBirth: number;
    price: number;
    imageUrl: string;
    constructor( species:String, age:number,price:number,imageUrl:string){
    this.Id = Math.random().toString();
      this.species = species;
      this.yearOfBirth = new Date().getFullYear() - age;
      imageUrl = imageUrl;
      this.price = price;
    }
    }

    const pets:Pet[] = []