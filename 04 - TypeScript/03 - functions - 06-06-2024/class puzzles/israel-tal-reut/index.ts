function greet(name:string):string{

    try {
        return "hello:"+ name;
    } catch (error) {
        console.error(error);
        return ""
    }
}

console.log(greet("israel"));

function double(x:number):number{
    try {
        return x*2;
    } catch (error) {
        console.error(error);
    }
}

console.log(double(100));

function area(x:number, y:number):number{
    try {
        return x*y;
    } catch (error) {
        console.error(error);
    }
}

console.log(area(40,10));



function (x:number, y:number):number{
    try {
        return x*y;
    } catch (error) {
        console.error(error);
    }
}

console.log(area(40,10));

