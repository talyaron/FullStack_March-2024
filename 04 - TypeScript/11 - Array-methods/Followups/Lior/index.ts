const arr:number[] = [1,8,14,37,52,20,43];
console.log(arr);

// array methods 

let sum = 0;

arr.forEach(function(elm:number){
    console.log(elm)
    sum += elm
})

console.log(sum);

console.log(arr.includes(62))

const index = arr.findIndex(function (elm){
    return elm === 14;
})

console.log(index)

