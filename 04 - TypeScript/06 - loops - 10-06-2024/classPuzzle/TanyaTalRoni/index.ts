function factorialAndEven(n: number): number {

  try {
    if (n < 0) {
        throw new Error("Enter a valid number");
      }
let evenNumbers = 1;
let isEven = false;
for(let i =2 ; i <= n; i++) {
    if(i % 2 === 0) {
        evenNumbers *= i;
        isEven = true;
    }}
    if (!isEven) {
        evenNumbers=0;
    }
    return evenNumbers;
} catch (error) {
    console.error(error);
    return 0;
  }
}
console.log(factorialAndEven(7));
