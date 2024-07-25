import { blackRookView, whiteRookView, Position, Type, } from "../types/typesModel";

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

    // method: setNewPostion("pos-0b") ->  new position
        setNewPostion(id:string){
        this.position.y = Number(id.slice(4,5));
        this.position.x = Number(id.slice(5,6));
        // this.position = new Position(x,y)
    }
}

export const pieces:Piece[] = [];



const blackRook = new Piece("black",new Position(0,1),blackRookView)
pieces.push(blackRook)

const whiteRook = new Piece("white",new Position(7,3),whiteRookView)
pieces.push(whiteRook)