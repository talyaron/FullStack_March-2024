function introduce(name: string, age?: number): string  {

    try {

        if (age === undefined) {
            throw new Error('Age not provided')
        }

        return "Hi, I'm " + name + ", and I'm " + age + " years old";

    } catch (error) {
        console.error(error)
        return "Hi, I'm " + name
    }
}

console.log(introduce("israel"));


function combineWords(a:string, b:string):string{
    return a + " " + b;
}


console.log(combineWords("hello", "world"));



function capitalize(text:string):string{
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}

console.log(capitalize("israel"));
