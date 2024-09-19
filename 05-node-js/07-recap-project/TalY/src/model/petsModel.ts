export class Pet{
    id: string;
    yearOfBirth: number;
    imageUrl?: string;

    constructor( public name: string, public species: string, age: number, public price: number){
        this.yearOfBirth = new Date().getFullYear() - age;
        this.id = crypto.randomUUID();
    }
}

export const pets: Pet[] = [
    new Pet('Buddy', 'Dog', 3, 500),
]