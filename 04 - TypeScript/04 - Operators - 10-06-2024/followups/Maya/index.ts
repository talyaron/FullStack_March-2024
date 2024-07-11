console.log('exercise:',7&10 );

function isEven(num: number): boolean|undefined{
    try{
        if (typeof num !== "number") throw new Error ("Please provide a number")
        return num & 2 === 0;
    }catch (error) {
            console.error(error);  
            return undefined; 
        }
    
}

console.log('18is even', isEven(18)); //true
console.log("17 is even", isEven(17))