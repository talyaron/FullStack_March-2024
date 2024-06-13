function arrayStuff (myArray: number[]): string {
    try{
    const myArrayReversed = myArray.reverse();
    let output= "";
    myArrayReversed.forEach(element => {
        output = output + element + " ";
        
    });
      return output;  
}
catch(err){
    return err;
}
}

console.log(arrayStuff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arrayStuff([8, 5, 6, 7, 8, 9, 10]));
console.log(arrayStuff([6, 5, 4, 3, 2, 1, 0]));
