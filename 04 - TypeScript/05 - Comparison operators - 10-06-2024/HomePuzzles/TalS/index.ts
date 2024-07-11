// homePuzzle 1
function calculateBusTicketPrice(age: number): number | undefined {
  try {
    let x = 50;

    if (age >= 18 && age <= 67) {
      return x;
    } else if (age < 18) {
      return (x *= 0.5);
    } else if (age > 67) {
      return (x *= 0.3);
    } else {
      throw new Error("Please enter a number");
    }
  } catch (error) {
    console.error(error);
  }
}
console.log("the passenger is 10 years old", calculateBusTicketPrice(10));
console.log("the passenger is 20 years old", calculateBusTicketPrice(20));
console.log("the passenger is 70 years old", calculateBusTicketPrice(70));
// console.log(calculateBusTicketPrice ("tal"));

// HomePuzzle 2

function sumOfOddNumbers(n: number): number | undefined {
  try {
    if (n < 0 || parseInt(n.toString()) !== n) {
      throw new Error("number cannot be negative or decimal");
    }
    let oddSum: number = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        oddSum += i;
      }
    }
    return oddSum;
  } catch (error) {
    console.error(error.message);
  }
}
console.log(sumOfOddNumbers(8));

// HomePuzzle 3

function fizzBuzz(N: number): void {
  try {
    for (let i = 1; i <= N; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}
fizzBuzz(10);

// HomePuzzle 4

function isPrime(num: number): boolean | undefined {
  try {
    for (let i = 2; i <= num; i++) {  // chatgpt pointed i could have used <=Math.sqrt(num) to make the code more efficient
      if (num % i === 0 ) {
        return false
      }
      else {
        return true
      }  
    }
  } catch (error) {
    console.error(error.message);
  }
}
console.log("11", isPrime(11));
console.log("12", isPrime(12));
console.log("13", isPrime(13));
console.log("14", isPrime(14));
console.log("16", isPrime(16));
console.log("17", isPrime(17));
console.log("18", isPrime(18));
console.log("19", isPrime(19));


