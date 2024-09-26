export class Player{
    playerId: string;
    

    constructor(  public name: string, public position: string, public number: number,public nationality: string, public imageUrl: string){
        this.playerId = crypto.randomUUID();
    }
    
    setName( name: string){
        this.name = name;
    }
    setPosition( position: string){
        this.position = position;
    }
    setNumber( number: number){
        this.number = number;
    }
    setNationality( nationality: string){
        this.nationality = nationality;
    }
    setImageUrl( imageUrl: string){
        this.imageUrl = imageUrl;
    }
}

export const players: Player[] =[
    new Player('Dani Carvajal','Rightback' ,2, 'Spanish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrlzezCR3fFjUZNGeWT3YpdkZ4RmSV6T7Wg&s')
]