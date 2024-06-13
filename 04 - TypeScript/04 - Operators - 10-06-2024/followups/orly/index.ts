console.log('exercise 1:',10%7); //modulus operator returns the remainder of a division operation

//let us know if a number is even or odd
console.log('exercise 2:', 20%2); 

function isEven(num: number): boolean|undefined {
    try {
        if(typeof num !== 'number') throw new Error("Please provide a number");
        return num % 2 === 0;
    } catch (error) {
        console.error(error);  
        return undefined; 
    }
   
}


// Assignment operators
let x = 20;
x+= 10;// x = x +10, x = 30;
x-= 5; //x = x - 5, x =25
x *=3; //x = x * 3, x = 75
x/=5; //x = x / 2, x = 15