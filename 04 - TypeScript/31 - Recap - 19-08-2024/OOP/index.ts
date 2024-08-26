class Pet{
    name: string;
    yearOdBirth: number;
    constructor(name: string, yearOdBirth: number){
        this.name = name;
        this.yearOdBirth = yearOdBirth;
    }
    makeSound(){
        return "Generic Pet Sound";
    }
    getAge(){
        return new Date().getFullYear() - this.yearOdBirth;
    }
}

// puppy is an instance of Pet
const puppy = new Pet("Puppy", 2019);
console.log(puppy.getAge()); // 5
console.log(puppy.makeSound()) ; // Generic Pet Sound


//inheritance

class Dog extends Pet{
    makeSound(){
        return "Woof Woof";
    }
    bringStick(){
        return "Here is your stick";
    }
}

const luna = new Dog("Luna", 2015);
console.log(luna.getAge()); // 9    
console.log(luna.makeSound()); // Woof Woof
console.log(luna.bringStick()); // Here is your stick