// # Calculate Bus Ticket Price

function calculateBusTicketPrice(age: number, ticketPrice: number): number {
  try {
    if (age <= 18) {
      return ticketPrice / 2;
    } else if (age < 67 && age > 18) {
      return ticketPrice;
    } else {
      return 0;
    }
  } catch (error) {}
}

console.log(calculateBusTicketPrice(5, 10));

// # Sum of Odd Numbers Function:

function sumOfOddNumbers(num: number): number {
  try {
    let oddSum = 0;
    for (let i = 1; i <= num; i += 2) {
      oddSum = oddSum + i;
    }
    return oddSum;
  } catch (error) {}
}

console.log(sumOfOddNumbers(8));

// # FizzBuzz Function:

function fizzBuzz(num: number): srting {
  let output = "";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output = output + "FizzBuzz ";
    } else if (i % 5 === 0) {
      output = output + "Buzz ";
    } else if (i % 3 === 0) {
      output = output + "Fizz ";
    } else {
      output = output + i + " ";
    }
  }

  return output;
}
console.log(fizzBuzz(15));

// # Prime Number Checker:

function isPrime(num: number): boolean {
  let numIsPrime = true;
  if (num === 2) {
    numIsPrime = true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        numIsPrime = false;
      }
    }
  }
  return numIsPrime;
}

console.log(isPrime(16));
