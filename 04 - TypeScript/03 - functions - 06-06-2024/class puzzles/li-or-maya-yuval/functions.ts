function greeting(x:string):string{
    try {
        if (typeof x != 'string'){
            throw new Error('Name is not string')
        }
        return("Hello" + " " + x); 

    } catch (error) {
        console.error(error);
        return "";
    }
}

console.log(greeting(15));

function double(x:number):number{
    try {
        if(typeof x != 'number'){
            throw new Error('input is not a number')
        }
        return x*2
    } catch (error) {
        console.error(error);
        return "";
    }
}