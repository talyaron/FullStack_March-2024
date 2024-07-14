class Player{
    name: string
    number: number
    club: string
    nationality: string
    age: number
    
    constructor( name :string, club:string, number: number,  nationality: string, age: number ){
        this.name = name;
        this.number = number;
        this.club = club;
        this.nationality = nationality;
        this.age = age;
    }
}

const Kroos = new Player( "Toni Kroos","Real Madrid", 8,  "Germany", 34);
console.log(Kroos);

const Raul = new Player("Raul","Real Madrid", 7, "Spain", 44 )
console.log(Raul);


