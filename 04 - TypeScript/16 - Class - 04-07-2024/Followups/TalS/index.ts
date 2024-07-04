class footballer{
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

const Kroos = new footballer( "Toni Kroos","Real Madrid", 8,  "Germany", 33);
console.log(Kroos);

const Raul = new footballer("Raul","Real Madrid", 7, "Spain", 44 )
console.log(Raul);
