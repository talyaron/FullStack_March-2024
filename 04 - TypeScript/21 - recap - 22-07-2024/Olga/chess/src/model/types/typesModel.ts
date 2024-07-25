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
  

    constructor(imageUrl:string, name:string){
        this.id = crypto.randomUUID();
        this.imageUrl = imageUrl;
        this.name = name;
    }

        
}

export const blackPawn = new Type("./src/assets/blackPawn.png","blackPawn")
export const whitePawn = new Type("./src/assets/whitePawn.png","whitePawn")
export const blackRookView = new Type("./src/assets/blackRook.png","blackRook")
export const whiteRookView = new Type("./src/assets/whiteRook.png","whiteRook")
export const blackKnight = new Type("./src/assets/blackKnight.png","blackKnight")
export const whiteKnight = new Type("./src/assets/whiteKnight.png","whiteKnight")
export const blackBishop = new Type("./src/assets/blackBishop.png","blackBishop")
export const whiteBishop = new Type("./src/assets/whiteBishop.png","whiteBishop")
export const blackQueen = new Type("./src/assets/blackQueen.png","blackQueen")
export const whiteQueenView = new Type("./src/assets/whiteQueen.png","whiteQueen")
export const blackKing = new Type("./src/assets/blackKing.png","blackKing")
export const whiteKing = new Type("./src/assets/whiteKing.png","whiteKing")

