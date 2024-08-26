//create model for counter
let counter: number = 1;

//controller function
function handleClick(): number {
<<<<<<< HEAD
  counter++;
  console.log(counter);
  renderCounter(counter); //invocation of view function
  renderEven(checkIfEven(counter)); //invocation of view function
  return counter;
=======
    counter++;
    console.log(counter);
    renderCounter(counter); //invocation of view function
    return counter;
>>>>>>> 974f83cc8cbf59d003ec733097dbb8bd9c4d6f0e
}

//view function
function renderCounter(counter: number): void {
<<<<<<< HEAD
  try {
    const screenCounter = document.querySelector("#counter");
    if (!screenCounter) {
      throw new Error("Element not found");
    }
    screenCounter.textContent = counter.toString();
  } catch (error) {
    console.error(error);
  }
}

function checkIfEven(counter: number): boolean {
  try {
    if (typeof counter !== "number") {
      throw new Error("Input is not a number");
    }
    return counter % 2 === 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function renderEven(isEven: boolean): void {
  try {
    const screenEven = document.querySelector("#even");
    if (!screenEven) {
      throw new Error("Element not found");
    }
    screenEven.textContent = isEven ? "Even" : "Odd";
  } catch (error) {
    console.error(error);
  }
}
=======
    try {
        const screenCounter = document.querySelector('#counter');
        if (!screenCounter) {
            throw new Error('Element not found');
        }
        screenCounter.textContent = counter.toString();
    } catch (error) {
        console.error(error);

    }
}
>>>>>>> 974f83cc8cbf59d003ec733097dbb8bd9c4d6f0e
