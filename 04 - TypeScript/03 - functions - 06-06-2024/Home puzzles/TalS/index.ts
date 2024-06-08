// second puzzle
function combineWords( x:string, y:string):string {
try {
    return x+" "+y
} catch (error) {
    console.error(error);
    return error;
}
}
console.log(combineWords("hello", "world"));
console.log(combineWords("Real", "Madrid"));


// first puzzle

function Introduce( name:string, age:number):any{
    try {
        if(age === undefined || age === null){
            // throw new Error('age not provided')
        return "Hi, I'm " + name + ", age not provided.";}
        return "Hi, I'm "+ name+ ", and I'm " + age + " years old."
        
    } catch (error) {
        console.error(error);
        return "Hi, I'm "+ name+ " error, age not provided"
        
    }
}
console.log(Introduce("Tal", 32));
console.log(Introduce("Tal"));


// third function

function capitalize( str:string):string {
try {
    return str.charAt(0).toUpperCase() +str.slice(1)
} catch (error) {
    console.error(error);
}
}

console.log(capitalize("real madrid"));


