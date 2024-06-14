/* # Array Reversal:

Write a function reverseArray<T>(arr: T[]): T[] that takes an array of any type and returns a new array with the elements in reversed order.
Example: reverseArray([1, 2, 3]) should return [3, 2, 1].
*/

function reverseArray(arr: number[]): number[] | undefined {
    try {
        //create a second array
        const _arr: number[] = [];
      
        //loop that takes the first element... and add it to the new array
   
        for (let elm of arr) {

            _arr.unshift(elm);
        }

      return _arr;

    } catch (error) {
        console.error(error);
        return undefined
    }
}


reverseArray([100, 2, 5, 7]);