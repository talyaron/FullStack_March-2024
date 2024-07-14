function factorialEven(num: number): number | string {
  let sol: number = 1;
  if (num < 0) {
    throw new Error("number must be positive");
  }
  try {
    for (let i = 2; i <= num; i += 2) {
      sol *= i;
    }
    return sol;
  } catch (error) {
    console.error(error);
    return "not a number";
  }
}

console.log(factorialEven(0));
