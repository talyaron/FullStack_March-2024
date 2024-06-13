// # Calculate Bus Ticket Price

// Write a TypeScript function called calculateBusTicketPrice that takes a person's age and the regular ticketPrice as input. The function should return the adjusted ticket price based on the following rules:

// If the person is under 18 years old, they get a 50% discount.
// If the person is between 18 and 67 (inclusive), they pay the full ticket price.
// If the person is over 67 years old,



// # Sum of Odd Numbers Function:

// Write a TypeScript function named sumOfOddNumbers that takes a positive integer n as input and returns the sum of all odd numbers from 1 up to n (inclusive). Use a loop and a conditional statement to achieve this.

// Example:

// If n = 5, the function should return 9 (1 + 3 + 5 = 9).
// If n = 8,

function sumOfOddNumbers(num: number): number|undefined {
    try {
        if (typeof num !== "number") {
            throw new Error('Not a number entered')
        }
        let result = 0;
        for (let i = 1; i <= num; i += 2) {
            result += i;
        }
        return result
    } catch (error) {
        console.error(error.message)
        return undefined
    }
}

console.log(sumOfOddNumbers(9));
console.log(sumOfOddNumbers(-2));
console.log(sumOfOddNumbers("nan"));


// # FizzBuzz Function:

// Write a TypeScript function named fizzBuzz that takes a number n as input.
// The function should print numbers from 1 to n, but with the following replacements:
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// Use a for loop and conditional statements (if, else if, else) to implement the logic.

function fizzBuzz(num: number): number|undefined {
    try {
        if (typeof num !== "number") {
            throw new Error('Not a number entered')
        }

        for (let i = 1; i <= num; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz");
            } else if (i % 3 == 0) {
                console.log("Fizz");
            } else if (i % 5 == 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }

    } catch (error) {
        console.error(error.message)
        return undefined
    }
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(18));
console.log(fizzBuzz("nan"));

// # Prime Number Checker:
// (This question is rather demanding)

// Create a function called isPrime that takes a number num as input.
// The function should return true if num is a prime number, and false otherwise.
// Use a for loop and appropriate conditions to determine if a number is prime.

function isPrime(num: number): boolean|undefined {
    try {
        console.log(num)
        if (isNaN(num)) {
            alert('The entered is not a number');
            throw new Error('Not a number entered')
        }
        for (let i = 2; i < num; i ++) {
            if (num % i == 0) {
                alert('Your number is not Prime');
                return false
            }
        }
        alert('Your number is Prime');
        return true
    } catch (error) {
        console.error(error.message)
        return undefined
    }
}

isPrime(Number(prompt('Enter the number')))
