const root = document.querySelector('#root');

class Player {
    name: string;
    yearOfBirth: number;
    x: number;
    y: number;

    constructor(name: string, yearOfBirth: number,) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;

    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    moveRight() {
        try {
            if (this.x === undefined) {
                this.x = 0;
            }
            if (this.y === undefined) {
                this.y = 0;
            }
            this.x += 5;
        } catch (error) {
            console.error(error)
        }   
       
    }


}

const tonikRoss = new Player('Tonik Ross', 1989);

console.log(tonikRoss)

console.log("Age: ", tonikRoss.getAge())
tonikRoss.setPosition(10, 20)
console.log(tonikRoss)
tonikRoss.moveRight();
console.log(tonikRoss)

const ronaldo = new Player('Ronaldo', 1985);
console.log(ronaldo)
console.log("Age: ", ronaldo.getAge())
ronaldo.moveRight();
console.log(ronaldo)
ronaldo.setPosition(20, 20)


console.log(ronaldo)