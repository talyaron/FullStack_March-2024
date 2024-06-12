function calculateBusTicketPrice(age: number, ticketPrice: number): number | undefined {
    try {
        if (age < 18) {
            return ticketPrice / 2; 
        } else if (age >= 18 && age < 67) {
            return ticketPrice; 
        } else if (age > 67) {
            return 0; 
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return undefined;
    }
}

// Example:
console.log(calculateBusTicketPrice( 15, 20));

console.log(calculateBusTicketPrice(20, 20));

console.log(calculateBusTicketPrice(70, 20));


// Sum of Odd Numbers Function:

function sumOfOddNumbers(n: number): number {
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    
    return sum;
}
// Example:

console.log(sumOfOddNumbers(5));
console.log(sumOfOddNumbers(8));

// FizzBuzz Function:

function fizzBuzz(n:number): any {
let sum = 0;

for(let i=1; i<= n; i++){
    if(i % 3 === 0 && i % 5 === 0){

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

// Example
console.log(fizzBuzz(14))

// Prime Number Checker:

function isPrime(num:number): boolean {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));



