// Filtering even numbers:

//Create a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.
//Use the filter method to accomplish this.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const string= ['Mango', 'banana', 'apple', 'cherry', 'strawberry', 'guava']

function filterEvenNumbers(numbers) {

    return numbers.filter(number=> number%2===0);

  }

console.log(filterEvenNumbers(numbers));

//Mapping square values:

//Create a function called mapSquareValues that takes an array of numbers as input and returns a new array with each number squared.
//Use the map method to accomplish this.

function MapSquareValues(numbers) {

    return numbers.map(numbers => numbers*numbers);

}

console.log(MapSquareValues(numbers))

//Reducing sum:

//Create a function called reduceSum that takes an array of numbers as input and returns the sum of all the numbers.
//Use the reduce method to accomplish this.

function reduceSum(numbers) {

    return numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
}

console.log(reduceSum(numbers))

// Sorting strings:

//Create a function called sortStrings that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
//Use the sort method to accomplish this.

const Strings = ['mango', 'banana', 'apple', 'cherry', 'strawberry', 'guava']

function sortStrings(array){

return array.slice().sort();
}

console.log(sortStrings(Strings));


//Create a function called allPositive that takes an array of numbers as input and returns true if all the numbers are positive, otherwise returns false.
//Use the every method to accomplish this.


function allPositive(numbers){
  
  return numbers.every(num => num > 0);

}

console.log(allPositive([5,6,7,8]));

console.log(allPositive([-5,6,-7,8]));

//Finding an element:

//Create a function called findFirstOddNumber that takes an array of numbers as input and returns the first odd number found in the array. If no odd number is found, return undefined.
//Use the find method to accomplish this.

function findFirstOddNumber(numbers) {

    return numbers.find(num=> num % 2 !==0);

}

console.log(findFirstOddNumber([4,5,6,7,8,9]));

console.log(findFirstOddNumber([2,4,6,8]));

//Combining arrays:

//Create a function called combineArrays that takes two arrays as input and returns a new array that combines the elements of both arrays.
//Use the spread operator (...) to accomplish this.

function combineArrays(array) {

    return [...array1, ...array2];
}
 let array1 = [1,2,3,4,5,6];
 let array2 = [7,8,9,10,11,12];

 console.log(combineArrays(array1, array2));