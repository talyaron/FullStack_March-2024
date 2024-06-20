const number = [5, 6, 7, 22, 93, 80];
const string = ['pineapple', 'banana', 'mango', 'lychee', 'melon'];
const negativeNumber = [-2, -6, -22, -9, -11];


//# Filtering even numbers:
function filteringEvenNumbers(arr: number[]): number[] {
    return arr.filter(elm => elm % 2 === 0);
}
console.log(filteringEvenNumbers(number));


//# Mapping square values:
function mapSquareValues(arr: number[]): number[] {
    return arr.map(elm => elm * elm);
}
console.log(mapSquareValues(number));


//# Reducing sum:
function reduceSum(arr: number[]): number[] {
    const initialValue = 0;
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}
console.log(reduceSum(number));


//# Sorting strings:
function sortStrings(arr: string[]): string[] {
    return arr.sort();
}
console.log(sortStrings(string));


//#Checking if all elements satisfy a condition:
function allPositive(arr: number[]): number[] {
    return arr.every(elm => elm >= 0)
}
console.log(allPositive(number));
console.log(allPositive(negativeNumber));


//# Finding an element:
function findFirstOddNumber(arr: number[]): number[] | undefined {
    return arr.find(elm => elm % 2 !== 0);
}
console.log(findFirstOddNumber(number));


//# Combining arrays:
function combineArrays(arr1:any[] , arr2:any []):any [] {
    return [...arr1, ...arr2];
}
console.log(combineArrays(number, string));
console.log(combineArrays(number, negativeNumber));