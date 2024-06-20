const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stringArray = ["Dog", "Cat", "Parrot", "Tiger", "Alpaca"];

// Filtering even numbers:

function filterEvenNumbers(num: number[]): number[] | undefined {
  try {
    return num.filter((number) => number % 2 === 0);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const evenNumbers = filterEvenNumbers(numbersArray);
console.log(evenNumbers);

// Mapping square values:

function mapSquareValues(num: number[]): number[] {
  try {
    return num.map((number) => number * number);
  } catch (error) {
    console.log(error);
    return [];
  }
}

const squaredNumbers = mapSquareValues(numbersArray);
console.log(squaredNumbers);

// Reducing sum:

function reduceSum(num: number[]): number {
  try {
    return num.reduce((elm, currentValue) => elm + currentValue, 0);
  } catch (error) {
    console.log(error);
    return 0;
  }
}

const sum = reduceSum(numbersArray);
console.log(sum);

// Sorting strings:

function sortStrings(elm: string[]): string[] | undefined {
  try {
    let sortedArray = elm.slice();
    sortedArray.sort();

    return sortedArray;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

const sortedArray = sortStrings(stringArray);
console.log(sortedArray);

// Checking if all elements satisfy a condition:

function allPositive(numbers: number[]): boolean | undefined {
  try {
    return numbers.every((number) => number > 0);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

console.log(allPositive(numbersArray));

//  Finding an element:

function findFirstOddNumber(numbers: number[]): number | undefined {
  try {
    return numbers.find((number) => number % 2 !== 0);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

console.log(findFirstOddNumber(numbersArray));

//  Combining arrays:

function combineArrays(numbersArray, stringArray) {
  try {
    return [...numbersArray, ...stringArray];
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

console.log(combineArrays(numbersArray, stringArray));
