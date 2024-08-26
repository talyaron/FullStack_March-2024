//variables
//to hold information in the browser's memory

//primitive variables

// let firstName:string = "John";
// let age:number = 25;
// let isMarried:boolean = false;
// let occupation:string|undefined = "Software Developer";

//constants are variables that cannot be changed
// const firstName1:string = "John";
// const age1:number = 25;
// const isMarried1:boolean = false;
// const occupation1:string|undefined = "Software Developer";

// age1 = 45;

// objects variables
//both objects, function and arrays are reference (object) variables
const person2 = {
    name: "John",
    age: 25,
}

console.dir(person2);

const persons = [
    {
        name: "John",
        age: 25,
    },
    {
        name: "Jane",
        age: 30,
    }
]

console.dir(persons);

//functions
const x = () => {
    console.log("Hello World");
};

console.dir(x);

//elements
// const element = document.getElementById("myElement"); (element is an object in the DOM)
//in arrays, elements are the items in the array

//parameters are variables that the function receives
function add(a:number, b:number):number {
    return a + b;
}

const u = add(2, 3);