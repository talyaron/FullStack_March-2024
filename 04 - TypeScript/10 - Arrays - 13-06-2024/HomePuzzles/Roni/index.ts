//Array Reverse
function reverseArray (arr: T[]) :T[]{
    try{
        let arrReverse = arr.reverse();
        let output="";
        arrReverse.forEach(element=>{
            output = output + element + " , ";
        });
        return output;
    }
    catch (error){
        return error;
    }
}
console.log(reverseArray([1,2,0,-1]));
console.log(reverseArray([4, 9, "R"]));

//Array Sum
function sumArray(arr: number[]): number{
    try{
        let Summation: number=0;
        arr.forEach(element => {
            Summation += element;
        });
        return Summation;
    }
    catch (error){
        return error;
    }
}
console.log(sumArray([10,20,30,40]))
console.log(sumArray([2,4,6,8]))

//Maximum Element 
function findMax(arr: number[]): number{
    try{
        let Maxnum: number=0;
        arr.forEach(element => {
            if( element > Maxnum) {
                Maxnum = element;
            };
            }) 
        return Maxnum;
    }
    catch (error){
        return console.error(error);
    }
}
console.log(findMax([10,20,30,40]))
console.log(findMax([2,4,6,8]))
console.log(findMax());

//Filtering Even Numbers
function filterEven(arr: number[]): number[]{
    try{
        let evenNum: number=0;
        arr.forEach(element => {
            if ( element%2===0){
            evenNum = evenNum + element + " , ";   
            };
        })
        return evenNum;
    }
    catch (error){
        return console.error(error);
    }
}
console.log(filterEven([5,10,23,21,44]))
console.log(filterEven([2,4,6,8]))
console.log(filterEven());

//Filtering Unique Numbers
function unique(arr: SomeType[]): SomeType[]{
try{
    let seen = new Set();
    let uniqueArr = [];
    arr.forEach (element => {
        if (!seen.has(element)) {
            uniqueArr.push(element);
            seen.add(element);
        };
    })
    return uniqueArr;
}
catch (error){
    return console.error(error);
}
}
console.log(unique([5,10,10,"r",44,"r"]))
console.log(unique([2,2,2,8]))
console.log(unique());    

//Frequency Counter