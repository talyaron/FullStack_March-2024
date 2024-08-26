export class Target {
    image: string;
    position: { x: number; y: number };
    id:string;
    direction: boolean;

    constructor(image: string, position: { x: number; y: number }, ){
        this.image = image,
        this.position = position,
        this.id = crypto.randomUUID(),
        this.direction = true
    }
    setposition(position: { x: number; y: number }){
        this.position = position;
    }
}

