const array = [1, 2, 23, 12, 13, 14, 32];
const arrayNegative = [-1, -2, -23, -12, -13, -14, -32];
const words = ["hello", "world", "this", "is", "a", "beautiful", "day"];
console.log(array);

// # Filtering even numbers:

// Create a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.
// Use the filter method to accomplish this.

const filterEvenNumbers = (arr: number[]) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    const evenNumbers = arr.filter((num) => num % 2 === 0);
    return evenNumbers;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

console.log(filterEvenNumbers(array));

// # Mapping square values:

// Create a function called mapSquareValues that takes an array of numbers as input and returns a new array with each number squared.
// Use the map method to accomplish this.

const mapSquareValues = (arr: number[]) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    const squares = arr.map((num) => num ** 2);
    return squares;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

console.log(mapSquareValues(array));

// # Reducing sum:

// Create a function called reduceSum that takes an array of numbers as input and returns the sum of all the numbers.
// Use the reduce method to accomplish this.

const reduceSum = (arr: number[]) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    const sum = arr.reduce(function (currentSum, currentNumber) {
      return currentSum + currentNumber;
    }, 0);
    return sum;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

console.log(reduceSum(array));

// # Sorting strings:

// Create a function called sortStrings that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
// Use the sort method to accomplish this.

const sortStrings = (arr: string[]) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    const sorted = arr.sort();
    return sorted;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

console.log(sortStrings(words));

// # Checking if all elements satisfy a condition:

// Create a function called allPositive that takes an array of numbers as input and returns true if all the numbers are positive, otherwise returns false.
// Use the every method to accomplish this.

const allPositive = (arr: number[]) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    const positive = arr.every((num) => num > 0);
    return positive;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

console.log(allPositive(array));
console.log(allPositive(arrayNegative));

// # Finding an element:

// Create a function called findFirstOddNumber that takes an array of numbers as input and returns the first odd number found in the array. If no odd number is found, return undefined.
// Use the find method to accomplish this.

const findFirstOddNumber = (arr: number[]) => {
  try {
    const odd = arr.find((num) => num % 2 !== 0);
    return odd;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

console.log(findFirstOddNumber(array));

// # Combining arrays:

// Create a function called combineArrays that takes two arrays as input and returns a new array that combines the elements of both arrays.
// Use the spread operator (...) to accomplish this.

const combineArrays = (arr1: any[], arr2: any[]) => {
  try {
    const combined = [...arr1, ...arr2];
    return combined;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

console.log(combineArrays(array, words));
