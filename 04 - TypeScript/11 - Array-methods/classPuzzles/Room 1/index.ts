const arr: string[] = ["banana", "apple", "cherry", "peach", 'gen'];

function filterStringsByLength(
  arr1: string[],
  minlength: number
): string [] | undefined {
  let arr2: string[] = [];
  try {
    arr1.forEach(function (elm: string) {
      if (elm.length >= minlength) {
        arr2.push(elm);
      }
    });
    return arr2;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}


console.log(filterStringsByLength(arr, 6));

function filterWordsByLetter(arr:string [], chr:string): string[] | undefined{
    let arr2: string[] = [];
    
    try {
        arr.forEach(function (elm: string){
            if( elm.includes(chr));
            arr2.push(elm)

        } 
    )
    } catch (error) {
        
    }
}