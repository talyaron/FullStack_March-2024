export class Pet{
    id: string;
    yearOfBirth: number;
    imageUrl?: string;

    constructor( public name: string, public species: string, public age: number, public price: number){
        this.name = name;
        this.species = species;
        this.yearOfBirth = new Date().getFullYear() - age;
        this.price = price;
        this.id = crypto.randomUUID();
    }
}

export const pets: Pet[] = [
    new Pet('Buddy', 'Dog', 3, 500),
]