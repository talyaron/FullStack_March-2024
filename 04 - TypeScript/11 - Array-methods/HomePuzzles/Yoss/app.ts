// # Filtering even numbers:
// Create a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.
// Use the filter method to accomplish this.

//option 1
const arr = [2, 3, 4, 5, 5, 67, 7, 5, 5, 7, 8, 12];

function filterEvenNumbers(arr: number[]): number[] | undefined {
    try {
        return arr.filter((elm) => elm % 2 == 0)
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//option 2
const filterEvenNumArrow: any = (_arr: number[]) => _arr.filter(element => element % 2 == 0)

// option 3
const filterEven: number[] = [1, 2, 3, 4, 5, 6, 7, 9].filter(element => element % 2 == 0)


console.log(filterEvenNumbers(arr));
console.log(filterEvenNumArrow(arr));
console.log(filterEven);



// # Mapping square values:
// Create a function called mapSquareValues that takes an array of numbers as input and returns a new array with each number squared.
// Use the map method to accomplish this.

//Mapping function 
//option 1
function mapSquareValues(arr: number[]): number[] | undefined {
    try {
        let values: number[] = arr.map((element) => Math.sqrt(element));
        return values;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//option 2
const mapSquareValuesArrow = (_arr: number[]) => (arr.map((e) => Math.sqrt(e)))

//option 3
const mapSqrt:number[] = arr.map((function (e:number) { return Math.sqrt(e) }))
const mapSqrt1:number[] = arr.map((e) => (Math.sqrt(e)));
const mapSqrt2:number[] = arr.map(e => Math.sqrt(e));


console.log(mapSquareValues(arr));
console.log(mapSquareValuesArrow(arr));
// console.log(mapSqrt, mapSqrt1, mapSqrt2);



// # Reducing sum:
// Create a function called reduceSum that takes an array of numbers as input and returns the sum of all the numbers.
// Use the reduce method to accomplish this.

function reduceSum(arr: number[]): number | undefined {
    try {
        return arr.reduce((a, b) => (a + b))
    } catch (error) {
        console.error(error)
        return undefined;
    }
}


const mapReduceArrow = (ele: number[]): number => (ele.reduce((a, b) => (a + b)))
const arrReduce = [2, 3, 4];
console.log(reduceSum(arrReduce));

