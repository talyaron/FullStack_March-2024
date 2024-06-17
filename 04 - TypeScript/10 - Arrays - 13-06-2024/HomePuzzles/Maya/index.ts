// Array Reversal:

function reverseArray(arr: any[]): any[] | undefined {
    try {
        const _arr: any[] = arr.slice().reverse();
        return _arr;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Example
reverseArray([100, 2, 'Hello','a', 7]);

// Array Summation:

function sumArray(arr: number[]): number | undefined {
    try {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum);
        return sum;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Example
sumArray([2,8,10,20]); 

// Maximum Element:

function  findMax(arr: number[]):  number | undefined {
    try {
        let largest = arr[0];
        for (let i = 0; i < arr.length; i++){
            if (largest < arr[i]){
                largest = arr[i];
            }
        }
        console.log(largest);

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Example

findMax([1,5,12,50]);

// Filtering Even Numbers:

function filterEven(arr: number[]): number[] | undefined {
    try {
        let evenNumbers: number[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenNumbers.push(arr[i]);
            }
        }
        return evenNumbers;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// Example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEven(numbers);
console.log(evenNumbers);

// Unique Values:
function unique<T>(arr: T[]): T[] {
    const uniqueSet = new Set<T>(arr);
    return Array.from(uniqueSet);
}

// Example
const numbers = [1,1,2,4,3,5,5];
const uniqueNumbers = unique(numbers);
console.log(uniqueNumbers);

const strings = ['apple', 'orange', 'banana', 'apple'];
const uniqueStrings = unique(strings);
console.log(uniqueStrings);

const any = [1, 'apple', 3, 1, 'banana', 'apple', 3, 5];
const uniqueAny= unique(any);
console.log(uniqueAny);


