// Calculate Bus Ticket Price

function calculateBusTicketPrice(age: number): number | undefined{
    try {
        let Price = 40;
        if (age < 18){
            return Price/2; 
        }
        else if(age>=18 && age<=67){
            return Price;
        }
        else{
            return Price = 0;
        }
    }    
    catch (error) {
        console.error(error);
        return undefined;
    }
}

// Tests

console.log(calculateBusTicketPrice(15));
console.log(calculateBusTicketPrice(34));
console.log(calculateBusTicketPrice(87));

// Sum of Odd Numbers Function

function sumOfOddNumbers(n: number): number | undefined {
    try{
        let sum = 0;
        for (let i = 1; i <= n; i++) {
          if (i % 2 !== 0) {
              sum += i;
            }
        } return sum;
    }
    catch (error){
        console.error(error);
        return undefined;
    }
    
}

// Tests

console.log(sumOfOddNumbers(6));
console.log(sumOfOddNumbers(9));
console.log(sumOfOddNumbers(11));

// FizzBuzz Function 

function fizzBuzz(n: number): any { 
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        } 
    }
}

// Tests 

console.log(fizzBuzz(18));

//  Prime Number Checker 

function isPrime(num: number) : boolean {
    if(num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Tests 

console.log(isPrime(7));

function calculateFactorial(num: number) : number {
    for(let i = 1; i => num; i++) {
        
    }
}