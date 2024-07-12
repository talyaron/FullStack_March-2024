const number = [15, 32, 43, 24, 5, 56, 7, 80, 39, 10];
const string = ["Dog", "Cat", "Parrot", "Tiger", "Alpaca"];
const negNumber = [-15, -32, -43, -24, -5, -56, -7, -80, -39, -10];


// Filtering even numbers

function filterEvenNumbers(num: number[]): number[] | undefined {
    try {
        return num.filter((number)=> number % 2 === 0);
    } catch (error) {
        console.log(error);
        return undefined
    }
}

const evenNumbers = filterEvenNumbers(number);
console.log(evenNumbers);

// Mapping square values

function mapSquareValues(num: number[]): number[] | undefined {
    try {
        return num.map((number) => number * number);
    } catch (error) {
        console.log(error);
        return undefined 
    }
}

const squareValues = mapSquareValues(number);
console.log(squareValues);

// Reducing sum 

function reduceSum(num: number[]):number | undefined {
    try {
        return num.reduce((a, b) => (a+b));  
    } catch (error) {
        console.log(error);
        return undefined
    }
}

const sum =  reduceSum(number);
console.log(sum);

// Sorting strings

function sortStrings(arr: string[]): string[] | undefined {
    try {
        return arr.sort();
    } catch (error) {
        console.log(error);
        return undefined
    }
}

const sortedString = sortStrings(string);
console.log(sortedString);

// Checking if all elements satisfy a condition 

function allPositive(num: number[]): boolean | undefined {
    try {
        return num.every((number) => number > 0);
    } catch (error) {
        console.log(error);
        return undefined
    }
}

const positive = allPositive(negNumber);
console.log(positive)
const positive = allPositive(number);
console.log(positive);

//  Finding an element

function findFirstOddNumber(num: number[]):number | undefined{
    try {
        return num.find((number) => number % 2 != 0 )
    } catch (error) {
        console.log(error);
        return undefined
    }
}

const oddNumber = findFirstOddNumber(number);
console.log(oddNumber)
const arrayNumbers = [2, 4, 6, 8, 10];
console.log(findFirstOddNumber(arrayNumbers));

// Combining arrays

function combineArrays(arr: number[], arr2: number[]): number[] | undefined{
    try {
        return arr.concat(arr2);
    } catch (error) {
        console.log(error);
        return undefined
    }
}

const newArray = combineArrays(number, negNumber);
console.log(newArray)

// Combining arrays

function combineArrays(arr: number[], arr2: number[]): number[] | undefined{
    try {
        return [ ...arr, ...arr2];
    } catch (error) {
        console.log(error);
        return undefined
    }
}

const newArray = combineArrays(number, negNumber);
console.log(newArray)