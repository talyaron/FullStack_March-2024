const array:number[] = [1,2,8,12,18,40,52];
console.log(array);

let sum = 0;


array.forEach(function(elm:number){
    console.log(elm);
    sum += elm
})

console.log(sum)


console.log(array.includes(2))
console.log(array.includes(3))

const x:number = array.findIndex(function (elm){
    return elm === 18;
})

console.log(x);


