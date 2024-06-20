const arr:number[] = [1,3,45,6,7,8,45,0,34];
console.log(arr)
// array methods

let sum = 0;

arr.forEach(function(elm:number){
    console.log(elm)
    sum += elm
})

console.log(sum)


console.log(arr.includes(45))

const index = arr.findIndex(function (elm){
    return elm === 8;
})

console.log(index)