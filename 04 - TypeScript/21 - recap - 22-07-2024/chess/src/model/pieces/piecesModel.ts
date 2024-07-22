import { Position, Type } from "../types/typesModel";

export class Piece{
    id:string;
    color:"black"|"white";
    position:Position;
    type:Type

    constructor(color:"black"|"white", position:Position, type:Type){
        this.id = crypto.randomUUID()
        this.position = position;
        this.color = color;
        this.type = type;
    }
}