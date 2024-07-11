//First Task - Name and Age
function NameandAge (firstName: string Age :number): string{
    try {
        if ( Age === undefined) {
            throw new Error ('Age not provided.')
        }
        return console.log("Hi, I'm " + firstName +", and I'm " + Age+" years old.");
    } 
    catch (error) {
        console.error(error)
    return console.log("Hi, I'm " + firstName);
    } 
}
//Positive Test
console.log(NameandAge("Shira" , 18));
//Error Test
console.log(NameandAge("Amit"));

//Second Task - Combining Words
 function CombineWords (FirstWord: string SecondWord: string) :string{
    try {
        if(FirstWord === undefined && SecondWord === undefined){
            throw new Error ("Words not provided");
        }
    return console.log (FirstWord + " " + SecondWord)
    }
    catch (error){
        console.error(error);
    }
 }
 //Positive Test
 console.log(CombineWords("Positive" , "Test"));
 //Error Test
 console.log(CombineWords(""));

 //Third Task - Capital Letter
 function CapitalLetter (str: String) :string{
    try{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    catch (error) {
        console.error(error);
    }
 }
 //Positive Test
 console.log(CapitalLetter("hey there"));
 //Error Test
 console.log(CapitalLetter(1));
