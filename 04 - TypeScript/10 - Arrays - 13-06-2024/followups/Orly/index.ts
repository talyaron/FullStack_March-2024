// array is a list of elements


const numbers: [] =[100, 30, 50, 20,70];
const strings: [] =['banana','cherry','apple','elephant','duck']
const anys: any[] = [1, 'a', true,  [1, 2, "3"]];

console.log(numbers);
console.log(numbers[5]);  
console.log(strings); 
console.log("length:",numbers.length);
console.log("sort by ascending:",numbers.sort((a,b)=>a-b));
console.log("sort by descending:",numbers.sort((a,b)=>b-a));
console.log("get max",Math.max(...numbers));
console.log("sort by alphabets:",string.sort((a,b)=>a-b));