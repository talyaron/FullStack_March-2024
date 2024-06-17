const arr: number[] = [1, 8, 5, 5, 57, 62, 15, 24, 0, 7];
console.log(arr);

let sum = 0;

arr.forEach(function (elm: number) {
  console.log(elm);
  sum += elm;
});
console.log(sum);

console.log(arr.includes(56));

const index = arr.findIndex(function (elm) {
  return elm === 5;
});

console.log(index);
