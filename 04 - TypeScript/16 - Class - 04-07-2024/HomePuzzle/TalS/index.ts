class Player {
  name: string;
  number: number;
  club: string;
  nationality: string;
  age: number;
  img: string;
  x: number;
  y: number;
  id: string;

  constructor(
    name: string,
    club: string,
    number: number,
    nationality: string,
    age: number,
    img: string
  ) {
    this.name = name;
    this.number = number;
    this.club = club;
    this.nationality = nationality;
    this.age = age;
    this.img = img;
    this.id = Math.random().toString();
  }
}

const Kroos = new Player(
  "Toni Kroos",
  "Real Madrid",
  8,
  "Germany",
  34,
  "Toni-Kroos.png"
);
console.log(Kroos);

const Raul = new Player("Raul", "Real Madrid", 7, "Spain", 44, "Raul.png");
console.log(Raul);
