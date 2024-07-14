function greeting(firstName: string): string {
  return "Hello, " + firstName;
}

console.log(greeting("Alice"));


function doubleResult(num: number): number {
    return num * 2;
  }
  
  console.log(doubleResult(5));

  function rectangleArea(h: number,w:number): number {
    return h * w;
  }
  
  console.log(rectangleArea(5,3));

  function squareNum(num: number): number {
    return Math.pow(num,2);
  }
  
  console.log(squareNum(5));

  function stringLen(str: string): number {
    return str.length;
  }
  
  console.log(stringLen("This is a test"));