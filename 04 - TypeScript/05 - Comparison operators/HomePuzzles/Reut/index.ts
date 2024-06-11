function calculateBusTicketPrice(age: number, ticketPrice: number): number | undefined {
    try {
        if (age <= 18) {
            return "The price is " + ticketPrice / 2;
        }
        else if (age > 67) {
            return "The price is " + 0;
        }
        else {
            return "The price is " + ticketPrice;
        }
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

console.log(calculateBusTicketPrice(18, 26));
console.log(calculateBusTicketPrice(70, 5));
console.log(calculateBusTicketPrice(50, 3.9));


function sumOfOddNumbers(num: number): number | undefined {
    try {
        let sum = 0;
        for (let i = 1; i <= num; i += 2) {
            sum = sum + i
        }
        return sum;
    } catch (error) {
        console.error(error)
        return undefined;
    }
}
console.log(sumOfOddNumbers(6));



function fizzBuzz(num: number): number | string | undefined {
    try {
        for (let i = 1; i <= num; i++) {
            if (!(i % 3 === 0 && i % 5 === 0 || i % 3 === 0 || i % 5 === 0))
                console.log(i); 

            if (i % 3 === 0 && i % 5 === 0 ) {
                console.log ('FizzBuzz')
            }
            else if (i % 3 === 0) {
                console.log ('Fizz');
            }
            else if (i % 5 === 0) {
                console.log ('Buzz');
            }
        }
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

console.log(fizzBuzz(16))

