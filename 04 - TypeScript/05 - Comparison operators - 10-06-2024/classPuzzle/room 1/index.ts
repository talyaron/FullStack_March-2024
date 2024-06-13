function compare(word1:string , word2:string):string | undefined{
    try {
        if (word1.length>word2.length){
            return word1;
            
        }else if(word1.length<word2.length){
            return word2;
        } else{
            return "tie " + word1 + " " + word2;
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

console.log(compare("igfhg" , "dhjkf"));
