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
    (accumulator, currentValue) => accumulator + currentValue + initialValue);
  
  console.log(reduceSum);
  
} catch (error) {
  console.error(error);
}

// sorting strings


