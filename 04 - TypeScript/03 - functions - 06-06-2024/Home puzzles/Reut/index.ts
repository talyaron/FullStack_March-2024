function square(x:number):number {
    try {
        return x*x 
    } catch (error) {
        console.error(error);
        
    }
}

console.log(square(5))

function length(x:string):number {
    try {
        return x.length
    } catch (error) {
        console.error(error);
    }
}

console.log (length("consistency"))
console.log (length("methodizing"))
console.log (length("amusing"))



function introduce(name:string , age:number):string {
    try {
        if (age === undefined || age === null){
            throw new Error ('Age not provided.')
        }

        return "Hi, I'm " + name + " and I'm " + age + " years old";
    } catch (error) {
        console.error(error);
        return "Hi, I'm " + name;
    }
}

console.log (introduce("Reut" , null))
console.log (introduce("Lironi ha tinoki"))
console.log (introduce("Luza Paluza" , 3))


function combineWords(x:string , y:string):string {
    try {
        return x + " " + y 
    } catch (error) {
        console.error(error);
    }
}

console.log (combineWords("Reut", "Kedar"))


function capitalizeFirstLetter(str:string):string {
    try {
        return str.charAt(0).toUpperCase() + str.slice(1);  
    } catch (error) {
        console.error(error);
    }
}

console.log (capitalizeFirstLetter("methodizing"))
console.log (capitalizeFirstLetter("amusing"))
console.log (capitalizeFirstLetter("j"))
console.log (capitalizeFirstLetter("i am"))


function getToKnow (hobby:string , animal:string):string {
    try {
        if (hobby === undefined || hobby === null || animal === undefined){
            throw new Error ('string not provided')
        }
        return "I like to " + hobby + " my favorite animal is " + animal; 
    } catch (error) {
        console.warn(error);
        return ""
    }
}

console.log (getToKnow("bake" , "dogs"))
console.log (getToKnow("bake"))