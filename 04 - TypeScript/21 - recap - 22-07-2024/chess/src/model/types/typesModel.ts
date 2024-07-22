export class Position{
    x:number
    y:number
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}
export class Type{
    id:string;
    imageUrl:string;
    name:string;
    position:Position;

    constructor(imageUrl:string, name:string, position:Position){
        this.id = crypto.randomUUID();
        this.imageUrl = imageUrl;
        this.name = name;
        this.position = position

    }
}