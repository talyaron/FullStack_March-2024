// # Filtering even numbers:

function filterEvenNumbers(arr: number[]): number[] {
  try {
    const results = arr.filter((r) => r % 2 === 0);
    return results;
  } catch (error) {}
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(arr));

// # Mapping square values:

function mapSquareValues(arr: number[]): number[] {
  try {
    const results = arr.map((r) => r ** 2);
    return results;
  } catch (error) {}
}

console.log(mapSquareValues(arr));

// # Reducing sum:

function reduceSum(arr: number[]): number {
  const initVal = 0;
  const result = arr.reduce(
    (prevVal, currentVal) => prevVal + currentVal,
    initVal
  );
  return result;
}
console.log(reduceSum(arr));

// # Sorting strings:

function sortStrings(arrStr: string[]): string[] {
  try {
    const results = arrStr.sort();

    return results;
  } catch (error) {}
}

const arrStr = ["aa", "a", "b", "aaaa"];
console.log(sortStrings(arrStr));

// Checking if all elements satisfy a condition:

// Create a function called allPositive that takes an array of numbers as input and returns true if all the numbers are positive, otherwise returns false.
// Use the every method to accomplish this.

// function allPositive()

// # Finding an element:

function findFirstOddNumber(arr: number[]): number | undefined {
  try {
    const result = arr.find((elm) => elm % 2 > 0);
    return result;
  } catch (error) {}
}

const arr2 = [2, 4, 6, 8, 11, 10];
console.log(findFirstOddNumber(arr2));

// # Combining arrays:

// Create a function called combineArrays that takes two arrays as input and returns a new array that combines the elements of both arrays.
// Use the spread operator (...) to accomplish this.

function combineArrays(arr1:any[],arr2:any[]):any[]{
try {
  let arr3 = [...arr1,...arr2];
  return arr3;
} catch (error) {
  
}
}
console.log(combineArrays(arr,arr2));
