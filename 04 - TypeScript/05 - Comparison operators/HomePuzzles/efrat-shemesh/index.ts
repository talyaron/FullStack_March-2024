// # Calculate Bus Ticket Price


function calculateBusTicketPrice(age:number, ticketPrice:number):number{
try {
    if(age<=18){
       return(ticketPrice/2); 
    }
    else if(age<67 && age>18){
        return(ticketPrice);
    }
    else {
        return 0;
    }
} catch (error) {

    
}
}

console.log(calculateBusTicketPrice(5,10))

// # Sum of Odd Numbers Function:

// Write a TypeScript function named sumOfOddNumbers that takes a positive integer n as input and returns the sum of all odd numbers from 1 up to n (inclusive). Use a loop and a conditional statement to achieve this.

// Example:

// If n = 5, the function should return 9 (1 + 3 + 5 = 9).
// If n = 8,

function sumOfOddNumbers(num:number):number{}

