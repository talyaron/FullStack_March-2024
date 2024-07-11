// # Array Reversal:

function reverseArray(arr: number[]): number[] {
  try {
    return arr.reverse();
  } catch (error) {}
}

console.log(reverseArray([1, 2, 3, 5, 6]));

// # Array Summation:

function sumArray(arr: number[]): number {
  let sumElements: number = 0;
  try {
    arr.forEach((item) => {
      sumElements = sumElements + item;
    });
    return sumElements;
  } catch (error) {}
}

console.log(sumArray([1, 2, 3, 5, 6]));

// # Maximum Element:

function findMax(arr: number[]): number {
  try {
    if (arr.length === 0) {
      throw new Error("empty array");
    }

    const maxNumber: number = undefined;

    arr.forEach((element) => {
      if (maxNumber === undefined) {
        maxNumber = element;
      } else if (maxNumber < element) {
        maxNumber = element;
      }
    });
    return maxNumber;
  } catch (error) {
    return error;
  }
}

console.log(findMax([11, 2, 300, 5, 6]));
console.log(findMax([]));

// # Filtering Even Numbers:

function filterEven(arr: number[]): number[] {
  try {
    const evenArr: number[] = [];

    arr.forEach((element) => {
      if (element % 2 === 0) {
        evenArr.push(element);
      }
    });
    return evenArr;
  } catch (error) {}
}

console.log(filterEven([11, 2, 300, 5, 6]));

// # Unique Values:

function unique(arr: any[]): any[] {
  try {
    const uniqueArr: any[] = [];
    arr.forEach((element) => {
      if (uniqueArr.length === 0) {
        uniqueArr.push(element);
      } else {
        if (!uniqueArr.find((obj) => obj === element)) {
          uniqueArr.push(element);
        }
      }
    });
    return uniqueArr;
  } catch (error) {}
}

console.log(unique([11, 12, 7, 11, 8, 11, 13, 12]));

// # Frequency Counter

function occurrences(arr: number[], num: number): number {
  try {
    let cntr: number = 0;

    arr.forEach((element) => {
      if (element === num) {
        cntr++;
      }
    });
    return cntr;
  } catch (error) {}
}

function frequency(arr: number[]): number[] {
  try {
    let _unique: number[] = [];
    let countArr: number[] = [];
    const multiArr: number[][] = [];
    let freqArr: number[] = [];
    let displayArr:number[] = [];
    let minFreqNum, maxFreqNum: number;

    _unique = unique(arr); //create a unique array

    //count occurrences
    _unique.forEach((element) => {
      countArr.push(occurrences(arr, element));
    });

    for (let i = 0; i < countArr.length; i++) {
      if (freqArr.length === 0) {
        freqArr[i] = countArr[i];
        displayArr[i] = _unique[i];
      } else {
        maxFreqNum = Math.max(...freqArr);
        minFreqNum = Math.min(...freqArr);

        if (maxFreqNum < countArr[i]) {
          //insert first
          freqArr.unshift(countArr[i]);
          displayArr.unshift(_unique[i]);
        } else if (maxFreqNum > countArr[i]) {
          freqArr.push(countArr[i]);
          displayArr.push(_unique[i]);
        }
      }
    }
    return displayArr;
   // console.log(_unique);
    //console.log(countArr);
   // console.log(freqArr);
   // console.log(displayArr);
  } catch (error) {}
}

console.log(frequency([2, 2, 2, 8, 5, 6, 8, 8, 8,7,7,7,7,7]));
