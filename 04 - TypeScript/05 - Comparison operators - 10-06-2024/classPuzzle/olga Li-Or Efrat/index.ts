
function compare(firstWord:string, secondWord:string):string{
    try {
        if (firstWord.length > secondWord.length){
            return firstWord;
        }else if (firstWord.length < secondWord.length){
            return secondWord;
        }else{
            return "Even";
        }
    } catch (error) {
        
    }
    
}

console.log(compare("test", "test"));
