
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