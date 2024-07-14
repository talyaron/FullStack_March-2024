function calculateBusTicketPrice(age: number, ticketPrice: number): number {
  if (age < 18) return ticketPrice / 2;
  if (age >= 18 && age <= 67) return ticketPrice;
  return 0;
}

// Sum of Odd Numbers Function:
function sumOfOddNumbers(n: number): number {
  let sum = 1;
  for (let i = 2; i <= n; i++) sum += i % 2 == 0 ? 0 : i;
  return sum;
  // if (i % 2 !== 0) sum += i
}

// FizzBuzz
function fizzBuzz(num: number): void {
  for (let i = 1; i <= num; i++) {
    if (num % 3 == 0 && num % 5 == 0) console.log("FizzBuzz");
    else if (num % 3 == 0) console.log("Fizz");
    else if (num % 5 == 0) console.log("Buzz");
    else console.log(num);
  }
}

// Prime number checker
function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) if (num % i == 0) return false;
  return true;
}

console.log(calculateBusTicketPrice(50, 10));
console.log(sumOfOddNumbers(15));
console.log(fizzBuzz(20));
console.log(isPrime(671));
