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

    new Pet('Milo', 'Dog', 2, 1000),

    new Pet('Browny', 'Dog', 1, 1500),

    new Pet('Cooper', 'Cat', 2, 1200),

    new Pet('Cookie', 'Cat', 0.6, 3000),

    new Pet('Ruby', 'Rabbit', 1, 500),

    new Pet('Daisy', 'Rabbit', 0.6, 700),
]