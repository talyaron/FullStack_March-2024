// Write a function sumArray(arr: number[]): number that takes an array of numbers and returns their sum.

function sumArray(arr: number[]): number {
    try {
        let sum = 0
        for (let elm of arr) {
            sum += elm;
        }
        return sum;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

console.log(sumArray([1, 5, 60, 4, 30, 1000]));


// Write a function findMax(arr: number[]): number that takes an array of numbers and returns the largest number.
// Handle the case of an empty array appropriately (e.g., return undefined or throw an error).

function findMax(arr: number[]): number | undefined {
    try {
        let maxNumber = arr[0]
        for (let i = 1; i <= arr.length; i++) {
            if (maxNumber < arr[i])
                (maxNumber = arr[i]);
        }
        if (arr.length === 0) {
            throw new Error('Array is empty');
        }
        return maxNumber;
    } catch (error) {
        console.warn(error);
        return undefined;
    }
}
console.log(findMax([1, 800, 400, 5, 60]));
console.log(findMax([]));


//Write a function filterEven(arr: number[]): number[] that takes an array of numbers and returns a new array containing only the even numbers

function filterEven(arr: number[]): number[] | undefined {
    try {
        const evenNumbers = arr.filter(num => num % 2 === 0)
        return evenNumbers;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(filterEven([1, 20, 8, 9, 3, 5, 6, 60, 2, -2]));


//Write a function unique(arr: SomeType[]): SomeType[] that takes an array of any type and returns a new array with only unique elements.

function unique(arr: any[]): any[] {
    let uniqueArr: any[] = [];

    for (let i = 0; i < arr.length; i++) {
        let Element = arr[i];

        if (uniqueArr.indexOf(Element) === -1) {
            uniqueArr.push(Element);
        }
    }
    return uniqueArr;
}
console.log(unique(['mango', 'banana', 'melon', 'banana', 'apple']));
console.log(unique(['mango', 'mango', 'mango', 'mango', 'mango']));


// Print the elements of an array in the decreasing frequency if 2 numbers have the same frequency then print the one which came first

function frequencyCounter(arr: number): number[] {
    const count = {}
    for (let i = 0; i < arr.length; i++) {
        let elm = arr[i];
        if (count[elm]) {
            count[elm] += 1;
        } else {
            count[elm] = 1;
        }
    }
}
console.log(frequencyCounter([5, 8, 5, 5, 8, 2, 1,]));