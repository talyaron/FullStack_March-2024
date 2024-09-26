export class Pet{
    id:string;
    name:string;
    species:string;
    age:number;
    price:number;
    imageURL?:string;
 
    constructor(name:string,species:string,age:number,price:number, imageURL?:string){
     this.id=crypto.randomUUID();
     this.name=name;
     this.species=species;
     this.age=new Date().getFullYear()-age;
     this.price=price;
     this.imageURL=imageURL;
    }
    setAge(age:number){
        this.age=age;
    }
    setPrice(price:number){
        this.price=price;
    }
    setSpecies(species:string){
        this.species=species;
    }
    setName(name:string){
        this.name=name;
    }
    setImage(image:string){
        this.imageURL=image;
    }
 }
 export const pets:Pet[]=[
    
        new Pet('rocky','Dog',4, 50),

        new Pet('Buddy', 'Dog', 3, 500),
    
        new Pet('Milo', 'Dog', 2, 1000),
    
        new Pet('Browny', 'Dog', 1, 1500),
    
        new Pet('Cooper', 'Cat', 2, 1200),
    
        new Pet('Cookie', 'Cat', 0.6, 3000),
    
        new Pet('Ruby', 'Rabbit', 1, 500),
    
        new Pet('Daisy', 'Rabbit', 0.6, 700),
    ];


 