const array: number[] = [1, 3, 45, 6, 7, 8, 9, 0, 34];

const elementIndex: number = array.findIndex((elm: number) => elm === 34);
console.log("Index of element 34:", elementIndex);

const mappedArray: number[] = array.map((elm: number) => elm * 10);
console.log("Array elements multiplied by 10:", mappedArray);

const filteredArray: number[] = array.filter((elm: number) => elm > 10);
console.log("numbers in array which are larger than 10:", filteredArray);

const slicedArray: number[] = array.slice(2, 6);
console.log("The array from index 2 to 5:", slicedArray);

