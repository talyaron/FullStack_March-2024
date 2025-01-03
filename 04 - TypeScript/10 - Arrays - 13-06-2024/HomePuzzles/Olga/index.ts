// # Array Reversal:

// Write a function reverseArray<T>(arr: T[]): T[] that takes an array of any type and returns a new array with the elements in reversed order.
// Example: reverseArray([1, 2, 3]) should return [3, 2, 1].

const reverseArray = (array: any[]) => {
  try {
    let newArray: any[] = [];
    array.forEach((element) => {
      newArray.unshift(element);
    });
    return newArray;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

console.log(reverseArray([4, 'l', 4.5, '123']))

// # Array Summation:

// Write a function sumArray(arr: number[]): number that takes an array of numbers and returns their sum.

const sumArray = (array: number[]) => {
    try {
      let result: number = 0;
      array.forEach((element) => {
        result += element;
      });
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  console.log(sumArray([4, 5, 1, 2]))

// # Maximum Element:

// Write a function findMax(arr: number[]): number that takes an array of numbers and returns the largest number.
// Handle the case of an empty array appropriately (e.g., return undefined or throw an error).

const findMax = (array: number[]) => {
    try {
        if (array.length == 0) {
            throw new Error('The array is empty')
        }
      let maxNum: number = 0;
      array.forEach((element) => {
        if (element > maxNum) {
            maxNum = element;
        };
      });
      return maxNum;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  console.log(findMax([4, 5, 1, 2]));
  console.log(findMax([]))


// # Filtering Even Numbers:

// Write a function filterEven(arr: number[]): number[] that takes an array of numbers and returns a new array containing only the even numbers.

const filterEven = (array: number[]) => {
    try {
        if (array.length == 0) {
            throw new Error('The array is empty')
        }
        let newArray: number[] = [];
        array.forEach((element) => {
        if (element % 2 == 0) {
            newArray.push(element);
        };
      });
      return newArray;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  console.log(filterEven([4, 5, 1, 2]));
  console.log(filterEven([]))

// # Unique Values:

// Write a function unique(arr: SomeType[]): SomeType[] that takes an array of any type and returns a new array with only unique elements.

const unique = (array: any[]) => {
    try {
        if (array.length == 0) {
            throw new Error('The array is empty')
        }
        let newArray: any[] = [];
        array.forEach((element) => {
        if (!newArray.includes(element)) {
            newArray.push(element);
        };
      });
      return newArray;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  console.log(unique([4, 1, 4, 5, 1, 2]));
  console.log(unique([4, 'g', 4, 5, 'g', 2, true, true]));
  console.log(unique([]))

// # Frequency Counter:
// Print the elements of an array in the decreasing frequency if 2 numbers have the same frequency then print the one which came first

// Examples:

// Input:  arr[] = [2, 2, 8, 5, 6, 8, 8, 8]
// Output: arr[] = [8, 2, 5, 6] // 8 came 4 times 2 came 2 times 5 came 1 time 6 came 1 time

// Hint: write another function that counts instances of a number in an array, and use it.

const count = (array: number[]) => {
    try {

    } catch (error) {
        console.error(error);
        return undefined
    }
}
