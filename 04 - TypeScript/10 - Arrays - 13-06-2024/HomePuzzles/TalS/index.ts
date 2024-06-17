// reversal

let players: string[] = ["Kroos", "Modric", "Vini", "Bellingham", "Valverde"];
console.log(players);
let reversedPlayers = [...players].reverse();
console.log(reversedPlayers);
console.log(players);

// ("now in a function....");

// summation

// function sumArray(nums: number[]): number {
//   try {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//     }
//     return sum;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// const nums: number[] = [5, 4, 3, 8];
// console.log(sumArray(nums));

// maximum element:

function findMax(arr: number[]): number {
  try {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  } catch (error) {
    console.error(error.message);
    throw new Error("undefined");
  }
}
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(findMax(arr));


// Even Numbers

function filterEven(even: number[]): number [] {
  try {
  const EvenNumbers : number [] = []
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 ===0) {
      EvenNumbers.push(even[i])
    }  
  }
  return EvenNumbers; 
} catch (error) {
  console.error(error.message);
  throw new Error("undefined");
}
}

const even = [7, 9, 2, 4, 5, 8, 3, 6]
console.log(filterEven(even));

// Unique values

function SomeType(unique:any []) : any {
  try {
    
  } catch (error) {
    
  }
}
