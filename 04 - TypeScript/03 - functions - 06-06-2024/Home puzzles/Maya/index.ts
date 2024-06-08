function nameAndAge(firstName: string, age: number): string {
    try {
        if (age === undefined) {
            throw new Error("Age not provided.");
        }
        return "Hi, I'm " + firstName + ", and I'm " + age + " years old.";
    } catch (error) {
        console.error(error.message);
        return "Hi, I'm " + firstName;
    }
}

// Test 
console.log(nameAndAge("Sean", 25));  


function connectWords(firstWord: string, secondWord: string): any{
    try{
        if(firstWord === undefined && secondWord === undefined){
            throw new Error ("words not provided ")
    }
    return console.log(firstWord + " " + secondWord);
}
    catch(error){
        return console.error(error.message);

    }   
}

// Test
console.log("Hello", "world")
console.log(1, "world")

function capitalizeFirstWord(input:string): string {
        if(!input){
            return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1);

}


// Test
console.log("hello world")
