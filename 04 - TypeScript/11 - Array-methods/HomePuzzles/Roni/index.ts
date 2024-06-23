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

//Mapping square values
function mapSquareValues (arr: number[]): number[]{
    try{
        let squared = arr.map((element)=>element*element);
        return squared;
    }
    catch (error){
        return console.error(error);
    }
}
console.log(mapSquareValues([5,10,23,21,44]))
console.log(mapSquareValues());

//Reducing sum
function reduceSum (arr: number[]): number[]{
    try{
        
    }
}