//primitive types
const firstName = "david"
const yearOfBirth = 1998;

//object types
const david = {
    // key:value
    yearOfBirth: -1040,
    firstName: "David",
    lastName: "King"
}

const Johnny = {
    yearOfBirth: -1038,
    firstName: "Johnny",
    lastName: "Son of Shaul"
}


const sara = {
    yearOfBirth: -1300,
    Father: "Haran"
}

console.log(`The name is: ${david.firstName} and his family name is: ${david.lastName}`);


const poffi = {
    color: ["blue", "yellow"],
    bread: "Budgie",
    age: 2,
    gender: "male",
    favoriteFood: "Millets",
    owner: "Naama"


}

console.log(`${poffi.owner}'s parrot is a ${poffi.bread}`);


interface Car {
    brand: string;
    model: string;
    color: string;
    year: number;
}

const michealCar: Car = {
    brand: "Renault",
    model: "Clio",
    color: "White",
    year: 2018
}

const israelCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    color: "silver",
    year: 2008,

}

function getCarsAge(car: Car): number | undefined {
    try {
        const year = car.year;
        const currentYear = new Date().getFullYear();
        return currentYear - year;
    } catch (error) {
        console.error(error)
        return undefined
    }
}

console.log(getCarsAge(israelCar));
console.log(getCarsAge(michealCar))

//addressing element in an object

//brand
console.log(michealCar.brand);
console.log(michealCar["brand"]);

function getCarProp(car: Car, prop: string): string | number | undefined{
    try {

        if (!car.hasOwnProperty(prop)) {
            throw new Error("Property does not exist in the object");
        }
        return car[prop];
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(getCarProp(michealCar, "year of production"));

const a = {
    b: {
        c: {
            d: "d"
        },
        d:[1,2,3]
    }
}

console.log(a.b.d[2]);

const element = document.getElementById("element1");
console.dir(element);

//destructuring
const {brand, model, color} = michealCar;
console.log(brand, model, color);