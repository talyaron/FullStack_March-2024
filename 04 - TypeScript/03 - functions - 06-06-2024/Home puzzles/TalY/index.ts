function introduce(name: string, age: number):string {
    try {
        if(age === undefined) throw new Error("Age is missing") 
        return(`Hello, my name is ${name}, I am ${age} years old`);
   
    } catch (error) {
        console.error(error);
        return (`Hello, my name is ${name}`);
    }
   
}

//invoke the function
console.log(introduce("Tal", 53));
// console.log(introduce("Tal"));