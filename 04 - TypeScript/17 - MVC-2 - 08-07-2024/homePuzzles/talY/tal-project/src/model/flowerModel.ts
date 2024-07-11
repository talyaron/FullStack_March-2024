export class Flower{
    image: string;
    name: string;
    id:string;
    constructor(image: string, name: string){
        this.image = image;
        this.name = name;
        this.id = crypto.randomUUID();
    }
}

export const flowers: Flower[] = [];