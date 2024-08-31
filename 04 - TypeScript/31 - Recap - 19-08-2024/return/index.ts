//pure function

//gets parameters (input) and returns a value (output)

// pure function
function add(a: number, b: number): number {
    return a + b;
}

let result = add(1, 2); //3

function renderNumberToScreen(aNumber: number) {
    //rendering the number to the screen
    document.getElementById("myElement").innerHTML = aNumber.toString();
}


//non-pure function
let x:number = 10; //global scope

function addX(a: number): number {
    return a + x;
}

let y = addX(10); //20

function increaseX() {
    x++;
}   

increaseX(); //x = 11

