function firstNameAndAge( firstName: string, age: number): string{
    try{
        if( age === undefined){
            throw new Error("Age not provided");
        }
        return "Hi, I'm " +firstName +", and I'm " +age +" years old."
    }catch(error){
        console.error(error);
        return "Hi, I'm " +firstName
    }
}

// Test
console.log(firstNameAndAge("Noy", 27));
console.log(firstNameAndAge("Noy"));

function stringsCombine(firstWord: string, secondWord: string): any{
    try{
        if(firstWord === undefined && secondWord === undefined){
            throw new Error("Words not provided");
        }
        return firstWord + " " + secondWord;
    }catch(error){
        return console.error(error);
    }
}

// Test
console.log(stringsCombine("Hello","World"));
console.log(stringsCombine("Hello",40));


