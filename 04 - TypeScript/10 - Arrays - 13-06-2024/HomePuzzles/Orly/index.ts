//Array Reversal:

//Write a function reverseArray<T>(arr: T[]): T[] that takes an array of any type and returns a new array with the elements in reversed order.
//Example: reverseArray([1, 2, 3]) should return [3, 2, 1].

const numbers = [6, 7, 8, 9, 10];

numbers.reverse();

console.log(numbers);


function reverseArray<T>(arr: T[]): T[] {
    const reversedArray = arr.slice();
    reversedArray.reverse();
    return reversedArray;
}

console.log(reverseArray([6, 7, 8, 9, 10]));


//# Array Summation:

//Write a function sumArray(arr: number[]): number that takes an array of numbers and returns their sum.

function SumOfAll(arr) {
       let Sum = 0;
    for (let a of arr)
        Sum += a;
    return Sum; 
};

console.log(SumOfAll([55,60,65]));

//# Maximum Element:

//Write a function findMax(arr: number[]): number that takes an array of numbers and returns the largest number.
//Handle the case of an empty array appropriately (e.g., return undefined or throw an error).

function maximum() {
    let array = [56, 72, 32, 20, 40]
    let max = array[0]
    for (let i = 0; i<array.length; i++){
        if(array[i]>max){
            max = array[i]
        }
    }
document.write(`The largest element in array is ${max}`);
}
maximum();

function findmax(arr:number[]): number | undefined {
    if(arr.length === 0){

        return undefined;
    }

    let max = arr[0];
    for (let i = 0; i<arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

}
const array1 = [56, 72, 32, 20, 40];
console.log(findmax(array1));

const array2 = [];
console.log(findmax(array2));

//# Filtering Even Numbers:

//Write a function filterEven(arr: number[]): number[] that takes an array of numbers and returns a new array containing only the even numbers.

function filterEven(arr: number[]): number[] {
    const evenNumbers: number[] = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}

const array1 = [7, 12, 1, 24, 3, 46, 71];
console.log(filterEven(array1)); 

const array2: number[] = [];
console.log(filterEven(array2));

//Write a function unique(arr: SomeType[]): SomeType[] that takes an array of any type and returns a new array with only unique elements.

 function UniqueArray<T>(arr: readonlyArray<T>) {
    return Array.from(new Set(arr) as UniqueArray<T>);  
 }

const uniqueNumbers: UniqueArray<number> = UniqueArray([5, 6, 6, 7, 7, 8, 9])
const uniqueString: UniqueArray<string> = UniqueArray(["apple", "mango", "banana", "mango", "orange", "banana"])

console.log("Unique numbers:", uniqueNumbers);
console.log("Unique strings:", uniqueString);

