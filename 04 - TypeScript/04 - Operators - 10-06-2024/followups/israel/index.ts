function odd (num:number):boolean | undefined{
    try {
        return num % 2!==0
    } catch (error) {
        
    }
}


console.log(odd(8));
