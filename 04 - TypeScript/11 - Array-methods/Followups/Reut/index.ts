const arr: number[] = [1, 4, 8, 66, 22, 14, 12];

let sum = 0;
arr.forEach(function (elm: number) {
    console.log(elm)
    sum += elm
})

console.log(sum);

let sum = 0;
arr.forEach(function (elm: number) {
    console.log(elm)
    sum -= elm
})

console.log(sum);
console.log(arr.includes(66, 72));


const index = arr.findIndex(function (elm) {
    return elm === 100;
}
)
console.log(index);

const pets = ['dog', 'cat', 'cow'];
console.log (pets.includes('cat'));