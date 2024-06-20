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



function SomeType(array: any[]): any {
    try {
        let arraySomeType: any[] = [];
        array.forEach((array) => {
            if (typeof array === 'number') {
                arraySomeType.push(array);
            }
        })
        return arraySomeType;
    } catch (error) {

    }
}


console.log(SomeType([1, "frt", 45, "jhy", "hjg", 1254, "fhj", 45]));



function






