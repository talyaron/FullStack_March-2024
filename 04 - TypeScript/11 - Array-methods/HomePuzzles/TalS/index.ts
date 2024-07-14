// filtering even numbers
let arr: number[] = [2, 10, 11, 57, 59, 50, 13, 16];
try {
  function filterEvenNumbers(array: number[]): number[] {
    return arr.filter((arr) => arr % 2 == 0);
  }
} catch (error) {
  console.error(error);
}

console.log(filterEvenNumbers(arr));

// Mapping square values

const arr1: number[] = [2, 3, 4, 5, 6];
try {
  const mapSquareValues: number[] = arr1.map((x) => x ** 2);
  console.log(mapSquareValues);
} catch (error) {
  console.error(error);
}

// Reducing sum
const arr2: number[] = [2, 4, 3, 1];
try {
  const initialValue = 0;
  const reduceSum: number = arr2.reduce(
    (accumulator, currentValue) => accumulator + currentValue + initialValue
  );

  console.log(reduceSum);
} catch (error) {
  console.error(error);
}

// sorting strings

const arr3: string[] = [
  "fede",
  "kroos",
  "modric",
  "carvajal",
  "alaba",
  "vini",
  "bellingham",
];
arr3.sort();
console.log(arr3);

// Checking if all elements satisfy a condition

const allPositive = (threshold) => threshold > 0;

const arr4: number[] = [1, 24, -23, 2, 5];

console.log(arr4.every(allPositive));

// finding an element

const arr5: number[] = [6, 8, 11, 3, 5, 2];

const findFirstOddNumber = arr5.find((element) => element % 2 !== 0);
console.log(findFirstOddNumber);

// combining arrays

const arr6:number | string [] = ['a', 2, 'c', 4]
const arr7:number | string [] = ['b', 1, 'd', 3]

const merged = [ ... arr6, ...arr7]
console.log(merged);
