export class Player{
    id: string;

    constructor(  public name: string, public position: string, public number: number,public nationality: string, public imageUrl: string){
        this.id = crypto.randomUUID();
    }
}

export const players: Player[] =[
    new Player('Dani Carvajal','Rightback' ,2, 'Spanish', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrlzezCR3fFjUZNGeWT3YpdkZ4RmSV6T7Wg&s')
]