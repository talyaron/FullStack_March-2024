function reverseArray(num: number []):number [] | undefined{
    try {
        return num.sort((a,b) => a-b);
    } catch (error) {
        console.error(error);
        return undefined
    }
}


console.log(reverseArray([1,8,455,456]));


function filterEven (numbers:number[]):number[]{
    try {
       return numbers.filter((Number) => Number %2 === 0);
    } catch (error) {
        
    }
}


console.log(filterEven([1,2,3,4,5,6,7,8,9]));

