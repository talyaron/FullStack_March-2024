
function filterStringsByLength(arr:string[], minLength:number){
    try {
        let arr2:string[]=[];
        arr.forEach(element => {
            if(element.length>=minLength){
                arr2.push(element);
            }
        });
        return arr2;
    } catch (error) {
        console.error(error);
    }
}
const words = ["apple", "banana", "cherry", "date","avocado", "pear"];
console.log(filterStringsByLength(words,5));

function filterWordsByLetter(arr:string[], letter:string){
    try {
        let arr2:string[]=[];
        arr.forEach(element => {
            if(element.includes(letter)){
                arr2.push(element);
            }
        });
        return arr2;
    } catch (error) {
        console.error(error);
    }
}
const words2 = ["apple", "banana", "cherry", "date","avocado", "pear"];
console.log(filterWordsByLetter(words2, "e"));

function filterStrings(data:any[]){
    try {
        let arr2:number[]=[];
        data.forEach(element => {
            if(typeof element === "number"){
                arr2.push(element);
            }
        });
        arr2.sort((a,b)=>a-b)
        return arr2;
    } catch (error) {
        console.error(error);
    }
}
const words3 = ["apple", "banana", "cherry", "date","avocado", "pear",5,true,107474,false,4.4];
console.log(filterStrings(words3));

function filterStrings2(data:any[]){
    try {
        let arr2:number[]=[];
        data.filter(checkNumbers)
        function checkNumbers(nums:number[]){
            return typeof nums === "number";
        }
        arr2.sort((a,b)=>a-b)
        return arr2;
    } catch (error) {
        console.error(error);
    }
}
const words4 = ["apple", "banana", "cherry", "date","avocado", "pear",5,true,107474,false,4.4];
console.log(filterStrings(words4));