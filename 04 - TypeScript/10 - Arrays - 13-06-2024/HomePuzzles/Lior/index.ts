// Array Reversal

function reverseArray(arr: any[]): any[] | undefined{
    try {
        const _arr: any[] = arr.slice().reverse();
        return _arr;
    } catch (error) {
        console.error(error)
        return undefined 
    }
}

reverseArray([100, 2, 'Hello','a', 7]);

// Array Summation

function sumArray( arr: number[]): number | undefined{
    try {
        let sum = 0;
        for(let i = 0; i < arr.length; i++ ){
         sum += arr[i];
        }
        return sum;
        
    } catch (error) {
        console.error(error)
        return undefined 
    }
}

sumArray([6,4,9]);

// Maximum Element

function findMax( arr: number[]): number | undefined{
    try {
        
        
    } catch (error) {
        console.error(error)
        return undefined 
    }
}