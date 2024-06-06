let x:number = 12;
let y:number = 23;

console.log(x+y);


function divide(a: number, b: number): number {

    if (b > 0) return (a / b);
    else console.error('cant divide by zero'); return 0;
}


function add(a: number, b: number): number {
    return a + b
}

function multiple(a: number, b: number): number {
    return a * b;
}

console.log(divide(12, 32));
console.log(add(12, 32));
console.log(multiple(12, 32));
