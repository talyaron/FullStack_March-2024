// # Puzzle 1:

function filterStringsByLength(arr: string[], minLength: number): string[] {
  let arrMinLen: string[] = arr.filter((elm) => elm.length === minLength);

  return arrMinLen;
}

const words = ["apple", "banana", "cherry", "date", "aaa"];

console.log(filterStringsByLength(words, 3));

// # Puzzle 2: Filtering Words by Letter

function filterWordsByLetter(arr: string[], letter: string): string[] {
  try {
    let arrByLetter: string[] = [];
    arr.forEach((elm) => {
      if (elm.includes(letter)) {
        arrByLetter.push(elm);
      }
    });
    return arrByLetter;
  } catch (error) {}
}

console.log(filterWordsByLetter(words, "b"));

// # Puzzle 3: Filtering Strings from Mixed Data

function filterStrings(data: any[]): number[] {
  try {
    let arrSorted: number[] = [];
    data.forEach((elm) => {
      if (Number.isFinite(elm)) {
        arrSorted.push(elm);
      }
    });
    arrSorted.sort();
    return arrSorted;
  } catch (error) {}
}

const mixedData = ["hello", "world", true];
console.log(filterStrings(mixedData));
